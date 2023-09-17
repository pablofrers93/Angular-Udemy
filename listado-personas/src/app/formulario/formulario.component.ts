import { Component, Output, EventEmitter, ViewChild, ElementRef} from '@angular/core';
import { Persona } from '../persona.model';
import { LoggingService } from '../LoggingService.service';
import { PersonasService } from '../personas.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {

  constructor(private loggingService: LoggingService,
              private personasService: PersonasService){
                this.personasService.saludar.subscribe(
                  (indice: number) => alert("El indice es: "+ indice)
                );
              }

  // @Output() personaCreada = new EventEmitter<Persona>();

  // @ViewChild('nombreInput') nombreInput: ElementRef
  // @ViewChild('apellidoInput') apellidoInput: ElementRef
  nombreInput: string = '';
  apellidoInput: string = '';

  agregarPersona(){
    let persona1 = new Persona(this.nombreInput, this.apellidoInput);
    //this.loggingService.enviaMensajeAConsola("Enviamos persona: "+persona1.nombre + " " + persona1.apellido);
    // this.personaCreada.emit(persona1);
    this.personasService.agregarPersona(persona1);
  }
}
