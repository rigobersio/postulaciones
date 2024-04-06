import { Component } from '@angular/core';
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

@Component({
  selector: 'app-form1',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule
  ],
  templateUrl: './form1.component.html',
  styleUrl: './form1.component.css'
})
export class Form1Component {

  nombre: FormControl = new FormControl('', Validators.required);
  correo: FormControl = new FormControl('', [Validators.required, Validators.email]);
  ciudad: FormControl = new FormControl('', Validators.required);
  calle: FormControl = new FormControl('', Validators.required);
  numero: FormControl = new FormControl('', [Validators.required, Validators.pattern('[0-9]{5}')]);
  telefono: FormControl = new FormControl('', [Validators.required, Validators.pattern('[0-9]{10}')]);
  postulacion: FormControl = new FormControl('', Validators.required);

  formulario: FormGroup;

  constructor(private fb: FormBuilder) {
    this.formulario = this.fb.group({
      nombre: this.nombre,
      correo: this.correo,
      ciudad: this.ciudad,
      calle: this.calle,
      numero: this.numero,
      telefono: this.telefono,
      postulacion: this.postulacion
    });

  }

  enviarFormulario() {
    alert(JSON.stringify(this.formulario.value));
    this.formulario.reset();
  }

}
