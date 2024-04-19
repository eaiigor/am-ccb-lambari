import { Component, OnInit } from '@angular/core';
import { Igreja } from 'src/app/interfaces/igrejas.model';
import { EventoService } from 'src/app/service/eventos.service';

@Component({
  selector: 'app-ensaio-local',
  templateUrl: './ensaio-local.component.html',
  styleUrls: ['./ensaio-local.component.scss']
})
export class EnsaioLocalComponent implements OnInit {

  igrejasGeral: Igreja[] = [];

  igrejasLambari: Igreja[] = [];
  igrejasJesuania: Igreja[] = [];
  igrejasOlimpio: Igreja[] = [];

  constructor(
    private eventoService: EventoService,
  ) { }

  ngOnInit(): void {
    this.carregar();

    console.log(this.igrejasLambari)
    console.log(this.igrejasJesuania)
    console.log(this.igrejasOlimpio)
  }

  carregar(): void {
    this.igrejasGeral = this.eventoService.receberIgrejas();
    this.separarPorCidade(this.igrejasGeral);
  }

  separarPorCidade(igrejas: Igreja[]): void {
    for (const igreja of igrejas) {
      switch (igreja.idCidade) {
        case 1: // idCidade de Lambari
          this.igrejasLambari.push(igreja);
          break;
        case 2: // idCidade de Jesuânia
          this.igrejasJesuania.push(igreja);
          break;
        case 3: // idCidade de Olímpio de Noronha
          this.igrejasOlimpio.push(igreja);
          break;
      }
    }
  }
}