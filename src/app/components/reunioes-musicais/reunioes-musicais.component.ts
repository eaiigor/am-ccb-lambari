import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ReuniaoMusical } from 'src/app/interfaces/reuniaoMusical.model';
import { EventoService } from 'src/app/service/eventos.service';

@Component({
  selector: 'app-reunioes-musicais',
  templateUrl: './reunioes-musicais.component.html',
  styleUrls: ['./reunioes-musicais.component.scss']
})
export class ReunioesMusicaisComponent implements OnInit {

  reunioesMusicais: ReuniaoMusical[] = [];

  constructor(
    private eventoService: EventoService,
    private sanitizer: DomSanitizer,
    ) { }

  ngOnInit(): void {
    this.carregarReunioesMusicais();
  }

  carregarReunioesMusicais(): void {
    this.reunioesMusicais = this.eventoService.receberReunioesMusicais().map(reuniao => {
      reuniao.data = reuniao.data.map(dataStr => new Date(dataStr)) as unknown as string[];
      return reuniao;
    });
  }

  getSafeTrailerUrl(safeLink: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(safeLink);
  }
}
