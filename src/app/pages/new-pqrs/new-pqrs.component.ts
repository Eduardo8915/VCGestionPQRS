import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import firebase from 'firebase';
import User = firebase.User;
import { PqrsService } from 'src/app/services/pqrs.service';
import { Pqrs } from 'src/app/models/pqrs.mode';


@Component({
  selector: 'app-new-pqrs',
  templateUrl: './new-pqrs.component.html',
  styleUrls: ['./new-pqrs.component.css']
})
export class NewPQRSComponent implements OnInit {

  error:string;
  isError: boolean;
  form: FormGroup;
  isSuccess: boolean;

  constructor(
    private router:Router,
    private formBuilder: FormBuilder,
    private authService:AuthService,
    private pqrsService: PqrsService
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      tipoPeticion:['',Validators.required],
      message:['',Validators.required],
      asunto:['',Validators.required]
    })
  }
  get tipoPeticion():string{
    return this.form.get('tipoPeticion').value;
  }

  get message():string{
    return this.form.get('message').value;
  }

  get user():User{
    return  this.authService.user;
  }

  get asunto():string{
    return this.form.get('asunto').value;
  }
  
  sendPeticion(){
    const pqrs: Pqrs = {
        usuario: this.user.email,
        tipo: this.tipoPeticion,
        peticion: this.message,
        asunto: this.asunto,
        fechaTransaccion: new Date(),
        fechaActualizacion: new Date()
    }

    this.pqrsService.createPQRS(pqrs)
    .then(response=>{
      console.log('salio ok')
      this.isSuccess = true;
      this.error = "Petición generada con éxito ";
      setTimeout(() => {
      this.isSuccess = false;
      this.error = "";
      this.router.navigate(['/ListPQRS']); }, 1000);

    })
    .catch(err=>{
      console.log('error')
      this.isError = true;
      this.error = err.message
    })

  }

}
