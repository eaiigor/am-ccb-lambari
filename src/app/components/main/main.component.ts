import { Component, OnInit } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/core'; // useful for typechecking
import dayGridPlugin from '@fullcalendar/daygrid';
import allLocales from '@fullcalendar/core/locales-all';
import timeGridPlugin from '@fullcalendar/timegrid'
import listPlugin from '@fullcalendar/list'
import { eventsData } from 'src/app/data/events.data';
import { Evento } from 'src/app/interfaces/evento.model';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  calendarOptions: CalendarOptions = {};
  eventos: Evento[] = [];
  
  ngOnInit(): void {
    this.calendarOptions = this.convertToCalendarEvents(eventsData);
    
    this.eventos = this.convertToEventos(eventsData);
  }

  convertToCalendarEvents(data: any[]): CalendarOptions {
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

  convertToEventos(data: any[]): Evento[] {
    let initId = 1;

    return data.flatMap((event, index) => {
      return event.diasDeEvento.map((date: string) => ({
        id: initId++,
        nomeEvento: event.nome,
        nomeLocalidade: event.localidade,
        linkEndereco: '',
        dataEvento: date,
        imgIgreja: event.imgIgreja,
        idIgreja: event.id,
        localidade: event.localidade,
        encarregadoLocal: event.encarregadoLocal,
        contato: event.contatoLocal,
      }));
    });
  }

}
