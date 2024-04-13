import { Component, OnInit } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import allLocales from '@fullcalendar/core/locales-all';
import timeGridPlugin from '@fullcalendar/timegrid'
import { Evento } from 'src/app/interfaces/evento.model';
import { EventosData } from 'src/app/interfaces/eventosData.model';
import { EventoService } from 'src/app/service/eventos.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  calendarOptions: CalendarOptions = {};
  eventos: Evento[] = [];
  eventosData: EventosData[] = [];
  proximosEventos: Evento[] = [];

  constructor(
    private eventoService: EventoService,
  ) { }
  
  ngOnInit(): void {
    this.carregar();

    this.calendarOptions = this.convertToCalendarEvents(this.eventosData);
    
    this.eventos = this.convertToEventos(this.eventosData);

    this.proximosEventos = this.getProximosEventos(this.eventos, 5);
  }

  carregar(): void {
    this.eventosData = this.eventoService.receberTodosEventos();
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
        diasEmFrase: event.diasEmFrase,
        cidade: event.cidade,
        iframeMaps: event.iframeMaps,
        endereco: event.endereco
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

  irParaDetalhes(idLocalidade: number): void {

    window.location.replace(`/detalhes-localidade/${idLocalidade}`);
  }
}
