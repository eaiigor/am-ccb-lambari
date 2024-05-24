import { ViewportScroller } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ReuniaoMusical } from 'src/app/interfaces/reuniaoMusical.model';
import { EventoService } from 'src/app/service/eventos.service';

@Component({
  selector: 'app-reunioes-musicais',
  templateUrl: './reunioes-musicais.component.html',
  styleUrls: ['./reunioes-musicais.component.scss']
})
export class ReunioesMusicaisComponent implements OnInit, OnDestroy {

  reunioesMusicais: ReuniaoMusical[] = [];
  responsividade: boolean = true;
  paddingSize: number = 5;

  constructor(
    private eventoService: EventoService,
    private sanitizer: DomSanitizer,
    private viewportScroller: ViewportScroller
  ) { }

  ngOnInit(): void {
    this.carregarEMapearDatas();

    this.checkScreenSize();

    window.addEventListener('resize', this.checkScreenSize);
  }

  carregarEMapearDatas(): void {
    this.reunioesMusicais = this.eventoService.receberReunioesMusicais().map(reuniao => {
      reuniao.data = reuniao.data.map(dataStr => new Date(dataStr)) as unknown as string[];
      return reuniao;
    });
  }

  getSafeTrailerUrl(safeLink: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(safeLink);
  }

  checkScreenSize = () => {
    const screenWidth = window.innerWidth;

    this.responsividade =screenWidth >= 1052;

    this.paddingSize = this.responsividade ? 5 : 3;
  }

  ngOnDestroy(): void {
    // Remover o listener quando o componente for destruído
    window.removeEventListener('resize', this.checkScreenSize);
  }
}
