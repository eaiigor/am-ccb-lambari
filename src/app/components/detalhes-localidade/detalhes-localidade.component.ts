import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Evento } from 'src/app/interfaces/evento.model';
import { EventosData } from 'src/app/interfaces/eventosData.model';
import { EventoService } from 'src/app/service/eventos.service';

@Component({
  selector: 'app-detalhes-localidade',
  templateUrl: './detalhes-localidade.component.html',
  styleUrls: ['./detalhes-localidade.component.scss']
})
export class DetalhesLocalidadeComponent implements OnInit, OnDestroy {

  evento!: EventosData
  safeIframerUrl: SafeResourceUrl | undefined;
  responsividade: boolean = true;
  paddingSize: number = 5;
  currentDate: Date = new Date();

  constructor(
    private route: ActivatedRoute,
    private eventoService: EventoService,
    private sanitizer: DomSanitizer,
  ) { }

  ngOnInit(): void {
    const idEvento = this.route.snapshot.paramMap.get('id');

    if (idEvento) {
      this.evento = this.eventoService.receberEventoPorId(parseInt(idEvento, 10));
    }

    this.safeIframerUrl = this.getSafeTrailerUrl(this.evento?.iframeMaps || '');

    this.checkScreenSize();

    window.addEventListener('resize', this.checkScreenSize);
  }

  getSafeTrailerUrl(safeLink: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(safeLink);
  }

  checkScreenSize = () => {
    const screenWidth = window.innerWidth;

    this.responsividade =screenWidth >= 1052;

    this.paddingSize = this.responsividade ? 5 : 3;
  }

  parseDate(dateString: string): Date {
    return new Date(dateString);
  }

  ngOnDestroy(): void {
    window.removeEventListener('resize', this.checkScreenSize);
  }
}
