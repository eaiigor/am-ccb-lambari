import { Component, Input } from '@angular/core';
import { Evento } from 'src/app/interfaces/evento.model';

@Component({
  selector: 'app-detalhes-localidade',
  templateUrl: './detalhes-localidade.component.html',
  styleUrls: ['./detalhes-localidade.component.scss']
})
export class DetalhesLocalidadeComponent {

  @Input() localidadeSelecionada: Evento;

  constructor() {
    this.localidadeSelecionada = {} as Evento; // Ou inicialize com um valor válido
  }
}
