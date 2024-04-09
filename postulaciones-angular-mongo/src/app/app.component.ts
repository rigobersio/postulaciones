import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';



import { ContadorComponent } from './contador/contador.component';
import { TextoColorComponent } from './texto-color/texto-color.component';
import { Form1Component } from './form1/form1.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NavBarComponent,
    ContadorComponent,
    TextoColorComponent,
    Form1Component,
    ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'postulaciones-angular-mongo';
}
