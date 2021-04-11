import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  error:string;
  isError: boolean;
  form: FormGroup;
  isSuccess: boolean;

  constructor(
    private router:Router,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name:['',Validators.required],
      email:['',Validators.required],
      phoneNumber:['',Validators.required],
      message:['',Validators.required]
    
    })
  }

  get name():string{
    return this.form.get('name').value;
  }

  get email():string{
    return this.form.get('email').value;
  }

  get phoneNumber():string{
    return this.form.get('phoneNumber').value;
  }

  get message():string{
    return this.form.get('message').value;
  }


  sendMessage(){
  
    this.isSuccess = true;
    this.error = "Mensaje enviado con éxito ";

    setTimeout(() => {
      this.isSuccess = false;
      this.error = "";
      this.router.navigate(['/']); }, 2000);
    }

}
