import { Injectable, EventEmitter } from '@angular/core';
import { Persona } from './persona.model';
import { LoggingService } from './LoggingService.service';

@Injectable({
  providedIn: 'root'
})
export class PersonasService {

  constructor(private loggingService: LoggingService){}

  personas: Persona[] = [
    new Persona('Pablo', 'Frers'),
    new Persona('Roberto', 'Juarez'),
    new Persona('Maria', 'Ramirez')
  ]

  saludar = new EventEmitter<number>();

  agregarPersona(persona: Persona){
    this.personas.push(persona);
    this.loggingService.enviaMensajeAConsola("agregamos persona desde PersonasService: "+ persona.nombre)
  }

  encontrarPersona(index:number){
    let persona: Persona = this.personas[index];
    return persona;
  }

  modificarPersona(index: number, persona: Persona){
    let persona1: Persona = this.personas[index];
    persona1.nombre = persona.nombre;
    persona1.apellido = persona.apellido;
  }

  eliminarPersona(index: number){
    this.personas.splice(index, 1);
  }
}
