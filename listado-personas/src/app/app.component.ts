import { Component } from '@angular/core';
import { Persona } from './persona.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo = 'Listado de Personas';


  personas: Persona[] = [
    new Persona('Pablo', 'Frers'),
    new Persona('Roberto', 'Juarez'),
    new Persona('Maria', 'Ramirez')
  ]

  personaAgregada(persona: Persona){
    this.personas.push(persona);
  }
}
