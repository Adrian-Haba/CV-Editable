import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from './../auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [AuthService],
})
export class LoginComponent {
  loginForm = new FormGroup({
    email: new FormControl(),
    password: new FormControl(),
  });

  constructor(private authSvc: AuthService) {}

  onLogin(){
    const {email, password} = this.loginForm.value;
    this.authSvc.login(email, password);
    console.log('Form: ', this.loginForm.value);
    setTimeout( function() {window.location.href = "/templatecv";}, 200)
  }
}
