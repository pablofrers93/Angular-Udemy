import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase/app';

import 'firebase/auth';
import 'firebase/database';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  titulo = 'Listado de Personas';

  constructor(){}

  ngOnInit(): void {
    firebase.initializeApp({
      apiKey: "AIzaSyDD4HVYxdL5SqFPlQiYLzzEACuHo8Jgwok",
      authDomain: "listado-personas-34a9f.firebaseapp.com",
    })
  }


}
