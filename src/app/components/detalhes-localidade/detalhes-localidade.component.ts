import { Component, Input } from '@angular/core';
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
export class DetalhesLocalidadeComponent {

  evento!: EventosData
  safeIframerUrl: SafeResourceUrl | undefined;

  constructor(
    private route: ActivatedRoute,
    private eventoService: EventoService,
    private sanitizer: DomSanitizer,
  ) { }

  ngOnInit(): void {
    const idEvento = this.route.snapshot.paramMap.get('id');

    if (idEvento) {
      this.evento = this.eventoService.receberEventoPorId(parseInt(idEvento, 10));
      console.log(this.evento)
    }

    this.safeIframerUrl = this.getSafeTrailerUrl(this.evento?.iframeMaps || '');
  }

  getSafeTrailerUrl(trailerLink: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(trailerLink);
  }
}
