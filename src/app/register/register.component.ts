import { Component} from '@angular/core';
import {FormGroup, FormControl } from '@angular/forms';
import { AuthService } from './../auth/auth.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [AuthService]
})
export class RegisterComponent {
  registerForm = new FormGroup({
    email: new FormControl(),
    password: new FormControl(),
  });

  constructor(private authSvc: AuthService) {}

  onRegister(){
    const { email, password } = this.registerForm.value;
    this.authSvc.register(email, password);
    console.log('Form: ', this.registerForm.value);
    setTimeout( function() {window.location.href = "/login";}, 200)
  }
}
