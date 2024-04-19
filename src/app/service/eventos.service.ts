import { Injectable } from '@angular/core';
import { eventsData } from '../data/events.data';
import { EventosData } from '../interfaces/eventosData.model';
import { ReuniaoMusical } from '../interfaces/reuniaoMusical.model';
import { reunioesMusicaisData } from '../data/reunioesMusicais.data';
import { Igreja } from '../interfaces/igrejas.model';
import { localidades } from '../data/localidades.data';

@Injectable({
    providedIn: 'root'
})
export class EventoService {

    private eventos: EventosData[] = eventsData;
    private reunioesMusicais: ReuniaoMusical[] = reunioesMusicaisData;
    private igrejas: Igreja[] = localidades;

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

    receberIgrejas(): Igreja[] {
        return this.igrejas;
    }
}