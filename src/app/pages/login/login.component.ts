import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  error:string;
  isError: boolean;
  form: FormGroup;
  constructor(
    private router:Router,
    private formBuilder: FormBuilder,
    private authService:AuthService
    ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email:['',Validators.required],
      password:['',Validators.required]
    })
  }

  get email():string{
    return this.form.get('email').value;
  }

  get password():string{
    return this.form.get('password').value;
  }

  login(){
    this.authService.login(this.email,this.password)
    .then(response=>{
      this.error = '';
      this.isError = false;
      this.authService.setUser(response.user);
      this.router.navigate(['/dashboard']);
      //console.log('then', response);

    })
    .catch(err=>{
      this.isError = true;
      this.error = err.message
      //console.log('catch',err.message);
    })
  }
  


}
