import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { 
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  Validators,
  FormControl 
} from '@angular/forms';

import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-form1',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule
  ],
  templateUrl: './form1.component.html',
  styleUrl: './form1.component.css'
})
export class Form1Component {

  public arrPostulaciones: string[] = [
    'Desarrollador web',
    'Ingeniero de software',
    'Diseñador gráfico',
    'Analista de datos',
    'Gerente de proyectos',
    // Agrega más nombres de postulaciones según sea necesario
  ];

  nombre: FormControl = new FormControl('', Validators.required);
  correo: FormControl = new FormControl('', [Validators.required, Validators.email]);
  ciudad: FormControl = new FormControl('', [Validators.required, Validators.pattern(/^\D+$/)]);
  calle: FormControl = new FormControl('', [Validators.required, Validators.pattern(/^\D+$/)]);
  numeroCasa: FormControl = new FormControl('', [Validators.required, Validators.pattern('^[0-9]*$')]);
  numeroPostal: FormControl = new FormControl('', [Validators.required, Validators.pattern('[0-9]{5}')]);
  telefono: FormControl = new FormControl('', [Validators.required, Validators.pattern('[0-9]{11}')]);
  postulacion: FormControl = new FormControl('', Validators.required);

  formulario: FormGroup;

  constructor(private fb: FormBuilder) {
    this.formulario = this.fb.group({
      nombre: this.nombre,
      correo: this.correo,
      ciudad: this.ciudad,
      calle: this.calle,
      numeroCasa: this.numeroCasa,
      numeroPostal: this.numeroPostal,
      telefono: this.telefono,
      postulacion: this.postulacion
    });

  }

  enviarFormulario() {
    alert(JSON.stringify(this.formulario.value));
    this.formulario.reset();
  }

}
