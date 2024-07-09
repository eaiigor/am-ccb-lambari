import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { EventoService } from 'src/app/service/eventos.service';
import { EventosData } from 'src/app/interfaces/eventosData.model';

@Component({
  selector: 'app-detalhes-localidade',
  templateUrl: './detalhes-localidade.component.html',
  styleUrls: ['./detalhes-localidade.component.scss']
})
export class DetalhesLocalidadeComponent implements OnInit, OnDestroy {

  evento: EventosData | undefined;
  safeIframerUrl: SafeResourceUrl | undefined;
  responsividade: boolean = false;
  paddingSize: number = 3;
  currentDate: Date = new Date();

  constructor(
    private route: ActivatedRoute,
    private eventoService: EventoService,
    private sanitizer: DomSanitizer,
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const idEvento = params['id'];
      if (idEvento) {
        this.evento = this.eventoService.receberEventoPorId(parseInt(idEvento, 10));
        this.safeIframerUrl = this.getSafeTrailerUrl(this.evento?.iframeMaps || '');
      }
    });

    this.checkScreenSize();
    window.addEventListener('resize', this.checkScreenSize);
  }

  getSafeTrailerUrl(safeLink: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(safeLink);
  }

  checkScreenSize = () => {
    const screenWidth = window.innerWidth;
    this.responsividade = screenWidth >= 1052;
    this.paddingSize = this.responsividade ? 5 : 3;
  }

  parseDate(dateString: string): Date {
    return new Date(dateString);
  }

  ngOnDestroy(): void {
    window.removeEventListener('resize', this.checkScreenSize);
  }
}