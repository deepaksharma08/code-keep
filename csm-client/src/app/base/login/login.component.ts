import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserResponse } from 'src/app/domain/user-response';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private authService: AuthService,
    private router: Router) {
    this.loginForm = new FormGroup({
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    })
  }

  ngOnInit(): void {
  }

  get f() {
    return this.loginForm.controls;
  }

  performLogin() {
    if (!this.loginForm.controls['email'].value || !this.loginForm.controls['password'].value) {
      return;
    }

    this.authService.login(this.f['email'].value, this.f['password'].value).subscribe(
      {
        next: (value: UserResponse) => {
          if (value.status === "SUCCESS") {
            this.router.navigateByUrl('csm');
          }
        }, error: (err: Error) => {
          alert("Some error occured while logging in");
        }
      }
    )
  }

}
