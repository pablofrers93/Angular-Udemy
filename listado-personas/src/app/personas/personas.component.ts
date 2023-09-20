import { Component, OnInit } from '@angular/core';
import { LoggingService } from '../LoggingService.service';
import { PersonasService } from '../personas.service';
import { Persona } from '../persona.model';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css']
})
export class PersonasComponent implements OnInit {

  constructor(private loggingService: LoggingService,
              private personasService: PersonasService){}

  ngOnInit(): void {
  this.personas = this.personasService.personas;
  }
  
  personas: Persona[] = []
  

}
