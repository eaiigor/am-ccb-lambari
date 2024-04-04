import { Component, OnInit } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import allLocales from '@fullcalendar/core/locales-all';
import timeGridPlugin from '@fullcalendar/timegrid'
import { eventsData } from 'src/app/data/events.data';
import { Evento } from 'src/app/interfaces/evento.model';
import { EventosData } from 'src/app/interfaces/eventosData.model';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  calendarOptions: CalendarOptions = {};
  eventos: Evento[] = [];
  proximosEventos: Evento[] = [];
  
  ngOnInit(): void {
    this.calendarOptions = this.convertToCalendarEvents(eventsData);
    
    this.eventos = this.convertToEventos(eventsData);

    this.proximosEventos = this.getProximosEventos(this.eventos, 5);

    console.log(this.eventos)
  }

  convertToCalendarEvents(data: EventosData[]): CalendarOptions {
    const events = data.flatMap(event => 
      event.diasDeEvento.map((date: string) => ({
        idIgreja: event.id,
        title: event.localidade,
        start: date,
      }))
    );

    return {
      headerToolbar: {
        start: 'prev,next today',
        center: 'title',
        end: 'dayGridMonth,timeGridWeek,timeGridDay'
      },
      initialView: 'dayGridMonth',
      plugins: [dayGridPlugin, timeGridPlugin],
      locales: allLocales,
      locale: 'pt-br',
      events: events
    };
  }

  convertToEventos(data: EventosData[]): Evento[] {
    let initId = 1;

    return data.flatMap((event, index) => {
      return event.diasDeEvento.map((date: string) => ({
        id: initId++,
        nomeEvento: event.nome,
        nomeLocalidade: event.localidade,
        linkEndereco: '',
        dataEvento: new Date(date),
        imgIgreja: event.imgIgreja,
        idIgreja: event.id,
        encarregadoLocal: event.encarregadoLocal,
        encarregadoRegional: event.encarregadoRegional,
        contatoLocal: event.contatoLocal,
      }));
    });
  }

  getProximosEventos(eventos: Evento[], quantidade: number): Evento[] {
    const dataAtual = new Date();

    // Ordenar os eventos pela data do evento
    eventos.sort((a, b) => a.dataEvento.getTime() - b.dataEvento.getTime());

    // Filtrar os próximos eventos
    const proximosEventos = eventos.filter(evento => evento.dataEvento.getTime() >= dataAtual.getTime());

    // Retornar apenas a quantidade especificada de próximos eventos
    return proximosEventos.slice(0, quantidade);
  }

  capitalizeFirstLetter(string: string): string {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
}
