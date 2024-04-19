import { Injectable } from '@angular/core';
import { eventsData } from '../data/events.data';
import { EventosData } from '../interfaces/eventosData.model';
import { ReuniaoMusical } from '../interfaces/reuniaoMusical.model';
import { reunioesMusicaisData } from '../data/reunioesMusicais.data';

@Injectable({
    providedIn: 'root'
})
export class EventoService {

    private eventos: EventosData[] = eventsData;
    private reunioesMusicais: ReuniaoMusical[] = reunioesMusicaisData;

    constructor() { }

    receberTodosEventos(): EventosData[] {
        return this.eventos;
    }

    receberEventoPorId(id: number): EventosData {
        return this.eventos.find(evento => evento.id === id)!;
    }

    receberReunioesMusicais(): ReuniaoMusical[] {
        return this.reunioesMusicais;
    }
}