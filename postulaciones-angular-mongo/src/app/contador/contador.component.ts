import { Component } from "@angular/core";

@Component({
    selector: 'app-contador',
    standalone: true,
    templateUrl: './contador.component.html',
    styleUrls: ['./contador.component.css']
})

export class ContadorComponent {

    public contador: number = 0;
}