import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import firebase from 'firebase';
import User = firebase.User;
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user?: User;
  constructor(
    private fireAuth: AngularFireAuth
  ) 
  {
    this.fireAuth.authState.subscribe((user)=>{
        if(user){
          this.setUser(user);
        }
    });
  }

  setUser(user: User){
    this.user = user;
  }

  get isLoggedIn(): boolean{
    return(this.user !== undefined);
  }


  login(email: string, password: string): Promise<any> {
    return this.fireAuth.signInWithEmailAndPassword(email,password);
  }

  logout(): Promise<any>{
    return this.fireAuth.signOut();
  }

}
