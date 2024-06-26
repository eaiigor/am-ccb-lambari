import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventosData } from 'src/app/interfaces/eventosData.model';
import { EventoService } from 'src/app/service/eventos.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  eventosData: EventosData[] = [];

  constructor(
    private router: Router,
    private eventoService: EventoService,
  ) { }

  ngOnInit(): void {
    this.carregar();
  }

  carregar(): void {
    this.eventosData = this.eventoService.receberTodosEventos();
  }

  irParaDetalhes(idLocalidade: number): void {

    window.location.replace(`/detalhes-localidade/${idLocalidade}`);
  }

  irParaTela(rota: string): void {
    this.router.navigate([rota]);
  }

  irParaCalendarioMusical(): void {
    const elemento = document.getElementById('calendario-musical');
    if (elemento) {
      elemento.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
