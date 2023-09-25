import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Persona } from './persona.model';
import { Observable } from 'rxjs';

@Injectable()

export class DataServices{
    constructor(private httpClient: HttpClient){}

    cargarPersonas(): Observable<Persona[]> {
        return this.httpClient.get<Persona[]>('https://listado-personas-34a9f-default-rtdb.firebaseio.com/datos.json');
      }

    guardarPersonas(personas: Persona[]){
        this.httpClient.put('https://listado-personas-34a9f-default-rtdb.firebaseio.com/datos.json', personas)
        .subscribe(
            response => console.log("resultado de guardar las personas" + response),
            error => console.log("Error al guardar las personas" + error)
        );
    }

    modificarPersona(index: number, persona: Persona){
        let url: string;
        url = 'https://listado-personas-34a9f-default-rtdb.firebaseio.com/datos/'+ index + '.json';
        this.httpClient.put(url, persona)
        .subscribe(
            response => console.log("resultado de modificar persona:" + response),
            error => console.log("error en modificar persona" + error)
        );
    }

    eliminarPersona(index: number){
        let url: string;
        url = 'https://listado-personas-34a9f-default-rtdb.firebaseio.com/datos/'+ index + '.json';
        this.httpClient.delete(url)
        .subscribe(
            response => console.log("resultado de eliminar persona:" + response),
            error => console.log("error en eliminar persona" + error)
        );
    }

}