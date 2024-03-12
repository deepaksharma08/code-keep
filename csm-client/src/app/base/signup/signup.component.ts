import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserResponse } from 'src/app/domain/user-response';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;
  showPassword: boolean = false;
  disableSubmitButton = false;

  constructor(private authService: AuthService,
    private router: Router,
    private toast: ToastrService) {
    console.log("Sign up component Created")
  }

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      confirmPassword: new FormControl('', Validators.required)
    })
  }

  get f() {
    return this.signupForm.controls;
  }


  public performRegistration() {
    if (!this.f['email'].value || !this.f['password'].value || !this.f['confirmPassword'].value) {
      return;
    }

    if (this.f['password'].value === this.f['confirmPassword'].value) {
      this.disableSubmitButton = true;
      this.authService.register(this.f['email'].value, this.f['password'].value).subscribe(
        {
          next: (value: UserResponse) => {
            if (value.status === "SUCCESS") {
              this.toast.success("Registration Successful", "Redirecting to Login Screen");
              setTimeout(() => {
                this.navigateToLogin();
              }, 2000)
            } else {
              this.toast.warning("User already exists. Please try with a different email");
            }
          }, error: (err: Error) => {
            this.toast.error("We encountered an error while trying a create an account for you. Please try again later");
          }, complete: () => {
            this.disableSubmitButton = false;
          }
        }
      )
    } else {
      this.toast.info("Password does not match")
    }
  }

  public navigateToLogin() {
    this.router.navigateByUrl('login');
  }

  public showPasswordToggle() {
    this.showPassword = !this.showPassword;
    let elements = document.getElementsByClassName('pass-input');
    if (this.showPassword) {
      this.changePasswordInputType(elements, 'text');
    } else {
      this.changePasswordInputType(elements, 'password');
    }
  }

  private changePasswordInputType(elements: HTMLCollectionOf<Element>, type: string) {
    for (let i = 0; i < elements.length; i++) {
      elements[i].setAttribute('type', type);
    }
  }

}
