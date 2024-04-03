import { Component } from '@angular/core';

@Component({
  selector: 'app-texto-color',
  standalone: true,
  imports: [],
  templateUrl: './texto-color.component.html',
  styleUrl: './texto-color.component.css'
})
export class TextoColorComponent {
  texto: string;
  textoColor: string;
  condicion: boolean;

  constructor() {
    this.texto = 'Soy un texto, por favor seleccione un color';
    this.textoColor = '';
    this.condicion = false;
  }
  cambioColor(color: string) {
    this.textoColor = color;
  }

  CambioCondicion(){
    if (this.condicion) {
      this.condicion = false;
    } else {
      this.condicion = true;
    }
  };
}
