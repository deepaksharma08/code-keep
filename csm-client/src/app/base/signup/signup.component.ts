import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;

  constructor() {
    this.signupForm = new FormGroup({
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      confirmPassword: new FormControl('', Validators.required)
    })
  }

  ngOnInit(): void {
  }

  get f() {
    return this.signupForm.controls;
  }


  performRegistration() {
    if (!this.signupForm.controls['email'].value || !this.signupForm.controls['password'].value || !this.signupForm.controls['confirmPassword'].value) {
      return;
    }
  }

}
