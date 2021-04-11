import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import firebase from 'firebase';
import User = firebase.User;

@Component({
  selector: 'app-icon-details',
  templateUrl: './icon-details.component.html',
  styleUrls: ['./icon-details.component.css']
})
export class IconDetailsComponent implements OnInit {

  @Input() source:string;
  @Input() label:string;
  @Input() link:string;
  @Output() message = new EventEmitter<string>();

  constructor(
    private authService : AuthService
  ){
      //console.log('icon-details');

  }

  get user(): User {
    return this.authService.user;
  }

  get isLoggedIn(): boolean {
    return this.authService.isLoggedIn;
  }

  ngOnInit(): void {
    console.log('isLoggedIn',this.isLoggedIn);
  }

  emitEvent(label: string): void {
    this.message.emit(label);
  }


}
