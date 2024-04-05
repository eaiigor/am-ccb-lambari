import { Injectable } from '@angular/core';
import { eventsData } from '../data/events.data';
import { EventosData } from '../interfaces/eventosData.model';

@Injectable({
    providedIn: 'root'
})
export class EventoService {

    private eventos: EventosData[] = eventsData

    constructor() { }

    receberTodosEventos(): EventosData[] {
        return this.eventos;
    }

    receberEventoPorId(id: number): EventosData {
        return this.eventos.find(evento => evento.id === id)!;
    }
}