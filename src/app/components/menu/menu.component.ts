import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import firebase from 'firebase';
import User = firebase.User;
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  iconDetails:object[];
  constructor(
    private authService:AuthService,
    private router :  Router
  ) { }

  //obtener Usuario
  get user():User{
    return  this.authService.user;
  }

  //Validar si esta logeado
  get isLoggedIn(): boolean{
    return this.authService.isLoggedIn;
  }

  async logout(): Promise<any> {
    this.authService.logout().then(() => {
      this.authService.setUser(undefined);
      this.router.navigate(['/']);
    });
  }

   ngOnInit(): void {
    this.iconDetails = [
      
      {
        label:'Login',
        source:'assets/icons/user.png',
        link:'login'
      },
      {
        label:'Logout',
        source:'assets/icons/salir.svg',
        link:''
      }
     
    ]

  }



}
