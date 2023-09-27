import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase/app';

import 'firebase/auth';
import 'firebase/database';
import { LoginService } from './login/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  
  titulo = 'Listado de Personas';

  constructor(private loginService: LoginService){}

  // ngOnInit(): void {
  //   firebase.initializeApp({
  //     apiKey: "AIzaSyDD4HVYxdL5SqFPlQiYLzzEACuHo8Jgwok",
  //     authDomain: "listado-personas-34a9f.firebaseapp.com",
  //   })
  // }

  isAutenticado(){
    return this.loginService.isAutenticado();
  }
  salir(){
    this.loginService.logout();
  }


}
