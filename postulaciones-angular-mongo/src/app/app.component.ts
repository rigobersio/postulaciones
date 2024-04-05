import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { ContadorComponent } from './contador/contador.component';
import { TextoColorComponent } from './texto-color/texto-color.component';
import { Form1Component } from './form1/form1.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    ContadorComponent,
    TextoColorComponent,
    Form1Component,
    FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'postulaciones-angular-mongo';
}
