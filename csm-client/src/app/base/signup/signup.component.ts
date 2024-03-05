import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserResponse } from 'src/app/domain/user-response';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;

  constructor(private authService: AuthService) {
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

    if (this.f['password'].value === this.f['confirmPassword'].value) {
      this.authService.register(this.f['email'].value, this.f['password'].value).subscribe(
        {
          next: (value: UserResponse) => {
            console.warn(value.status);
          }, error: (err: Error) => {
            console.warn(err.message);
          }
        }
      )
    } else {
      alert('Password doesnot match');
    }

  }

}
