import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';


@Injectable()
export class LoginService{

    token: string | null;

    constructor(private router: Router){}

    login(email: string, password: string){
        firebase.auth().signInWithEmailAndPassword(email, password).
           then(
               response => {
                   firebase.auth().currentUser?.getIdToken().then(
                       token => {
                           console.log(token);
                           this.token = token;
                           this.router.navigate(['/']);
                       }
                   )
               }
           )
           
    }

    getIdToken(){
        return this.token;
    }

    isAutenticado(){
        return this.token != null;
    }

    logout(){
        firebase.auth().signOut().then( ()=>{
            this.token = null;
            this.router.navigate(['login']);
        }).catch(error => console.log("error logout: " + error));
    }
}