import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PqrsService } from 'src/app/services/pqrs.service';
import { AuthService } from 'src/app/services/auth.service';
import firebase from 'firebase';
import User = firebase.User;

@Component({
  selector: 'app-list-pqrs',
  templateUrl: './list-pqrs.component.html',
  styleUrls: ['./list-pqrs.component.css']
})
export class ListPqrsComponent implements OnInit {

  pqrs:any[]=[];

  constructor(
    private router:Router,
    private pqrsService: PqrsService,
    private authService:AuthService
  ) { }

  
  get user():User{
    return  this.authService.user;
  }

  ngOnInit(): void {
    this.getPQRS();
  }

  getPQRS(){
    this.pqrsService.getPQRS(this.user.email).subscribe(data => {
      data.forEach((element:any) => {
        //console.log(element.payload.doc.id);
        //console.log(element.payload.doc.data());
        this.pqrs.push({
          id: element.payload.doc.id,
          ...element.payload.doc.data()
        })
      });
      console.log(this.pqrs);
    });
  }

}
