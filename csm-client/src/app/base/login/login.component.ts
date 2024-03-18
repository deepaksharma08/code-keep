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
  emailValid: boolean = true;
  passwordValid: boolean = true;

  constructor(private authService: AuthService,
    private router: Router,
    private toast: ToastrService) {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(8)])
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
          if (value.token) {
            sessionStorage.setItem("USER", value.id.toString());
            sessionStorage.setItem("token", value.token);
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

  focusOut(item: string) {
    switch (item) {
      case 'email':
        this.emailValid = this.f['email'].valid;
        break;
      case 'pass':
        this.passwordValid = this.verifyPasswordValidation();
        break;
      default:
        break;
    }
  }

  private verifyPasswordValidation(): boolean {
    if (this.f['password'].value.length < 7) {
      return false;
    } else return true;
  }

}
