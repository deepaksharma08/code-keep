import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm : FormGroup;

  constructor() {
    this.loginForm = new FormGroup({
      email : new FormControl('', Validators.required),
      password : new FormControl('', Validators.required)
    })
   }

  ngOnInit(): void {
  }

  performLogin() {
    if(!this.loginForm.controls['email'].value || !this.loginForm.controls['password'].value) {
      return;
    }

    console.warn("User name is " + this.loginForm.controls['email'].value);
    console.warn("Password is " + this.loginForm.controls['password'].value);
  }

}
