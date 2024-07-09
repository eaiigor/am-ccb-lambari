import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
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
    private activatedRoute: ActivatedRoute,
    private eventoService: EventoService,
  ) { }

  ngOnInit(): void {
    this.carregar();
    this.activatedRoute.params.subscribe(params => {
      const id = params['id'];
      if (id) {
        this.irParaDetalhes(id);
      }
    });
  }

  carregar(): void {
    this.eventosData = this.eventoService.receberTodosEventos();
  }

  irParaDetalhes(idLocalidade: number): void {
    this.router.navigate([`/detalhes-localidade/${idLocalidade}`]);
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

  fecharMenu(): void {
    const navbarToggler = document.querySelector('.navbar-toggler') as HTMLElement;
    const navbarSupportedContent = document.querySelector('#navbarSupportedContent') as HTMLElement;

    if (navbarToggler && navbarSupportedContent.classList.contains('show')) {
      navbarToggler.click();
    }
  }
}