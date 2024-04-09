import {Component} from '@angular/core';

// el siguiente es porque la navbar está renderizando otros componentes
import { CommonModule } from '@angular/common';



import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';

// componentes
import { ContadorComponent } from '../contador/contador.component';
import { TextoColorComponent } from '../texto-color/texto-color.component';
import { Form1Component } from '../form1/form1.component';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [CommonModule, MatToolbarModule, MatButtonModule, MatIconModule, MatMenuModule, ContadorComponent, TextoColorComponent, Form1Component],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {

ComponentToRender: any = null;

showContador() {
  this.ComponentToRender = ContadorComponent;
}

showTextoColor() {
  this.ComponentToRender = TextoColorComponent
}

showForm1 () {
  this.ComponentToRender = Form1Component;
}

showCompasFantasmas () {
  this.ComponentToRender = null;
}
}
