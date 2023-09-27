import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Persona } from './persona.model';
import { Observable } from 'rxjs';
import { LoginService } from './login/login.service';

@Injectable()

export class DataServices{
    constructor(private httpClient: HttpClient,
                private loginService: LoginService){}

    cargarPersonas(): Observable<Persona[]> {
        const token = this.loginService.getIdToken();
        return this.httpClient.get<Persona[]>('https://listado-personas-34a9f-default-rtdb.firebaseio.com/datos.json?auth='+ token);
      }

    guardarPersonas(personas: Persona[]){
        const token = this.loginService.getIdToken();
        this.httpClient.put('https://listado-personas-34a9f-default-rtdb.firebaseio.com/datos.json?auth='+ token, personas)
        .subscribe(
            response => console.log("resultado de guardar las personas" + response),
            error => console.log("Error al guardar las personas" + error)
        );
    }

    modificarPersona(index: number, persona: Persona){
        const token = this.loginService.getIdToken();
        let url: string;
        url = 'https://listado-personas-34a9f-default-rtdb.firebaseio.com/datos/'+ index + '.json?auth=' + token;
        this.httpClient.put(url, persona)
        .subscribe(
            response => console.log("resultado de modificar persona:" + response),
            error => console.log("error en modificar persona" + error)
        );
    }

    eliminarPersona(index: number){
        const token = this.loginService.getIdToken();
        let url: string;
        url = 'https://listado-personas-34a9f-default-rtdb.firebaseio.com/datos/'+ index + '.json?auth=' + token;
        this.httpClient.delete(url)
        .subscribe(
            response => console.log("resultado de eliminar persona:" + response),
            error => console.log("error en eliminar persona" + error)
        );
    }

}