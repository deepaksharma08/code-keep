import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
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
    private router: Router,
    private toast: ToastrService) {
    this.loginForm = new FormGroup({
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    })
  }

  ngOnInit(): void {
    sessionStorage.clear;
    sessionStorage.clear;
  }

  get f() {
    return this.loginForm.controls;
  }

  performLogin() {
    if (!this.f['email'].value || !this.f['password'].value) {
      return;
    }

    this.authService.login(this.f['email'].value, this.f['password'].value).subscribe(
      {
        next: (value: UserResponse) => {
          if (value.status === "SUCCESS") {
            sessionStorage.setItem("USER", value.id.toString());
            sessionStorage.setItem("token","DUMMY-TOKEN");
            this.router.navigateByUrl('csm');
          } else {
            this.toast.error("User not found", "Please verify email and password");
          }
        }, error: (err: Error) => {
          this.toast.error("There was an issue logging you in, Please try again later.");
        }
      }
    )
  }

  signupLinkClick() {
    this.router.navigateByUrl('signup');
  }

}
