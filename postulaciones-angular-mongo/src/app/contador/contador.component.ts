import { Component } from "@angular/core";

@Component({
    selector: 'app-contador',
    standalone: true,
    templateUrl: './contador.component.html',
    styleUrls: ['./contador.component.css']
})

export class ContadorComponent {
    title: string;
    numero: number;
    constructor() {
        this.title = 'Botón para contar todos los clicles que realice el usuario';
        this.numero = 0;
    }

    incrementar() {
        this.numero++;
    };
    decrementar() {
        this.numero--;
    };
    
}