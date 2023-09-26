import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { environment } from 'src/environments/environment';


@Injectable()
export class LoginService{

    token: string;

    constructor(private router: Router){
                    
                }

    login(email: string, password: string){
        console.log("entrando al login");
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
}