import { Component, OnInit } from '@angular/core';
import { LoggingService } from '../LoggingService.service';
import { PersonasService } from '../personas.service';
import { Persona } from '../persona.model';
import { Router } from '@angular/router'

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css']
})
export class PersonasComponent implements OnInit {

  constructor(
    private personasService: PersonasService,
    private router: Router){}

  ngOnInit(): void {
  this.personas = this.personasService.personas;
  }
  
  personas: Persona[] = []
  
  agregar(){
    this.router.navigate(['personas/agregar'])
  }

}
