import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  titulo = 'Aplicación Calculadora';

  resultado: number;

  getResultado(suma: number){
    this.resultado = suma;
  }
}
