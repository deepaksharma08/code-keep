import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
let SignupComponent = class SignupComponent {
    constructor(authService) {
        this.authService = authService;
        this.signupForm = new FormGroup({
            email: new FormControl('', Validators.required),
            password: new FormControl('', Validators.required),
            confirmPassword: new FormControl('', Validators.required)
        });
    }
    ngOnInit() {
    }
    get f() {
        return this.signupForm.controls;
    }
    performRegistration() {
        if (!this.signupForm.controls['email'].value || !this.signupForm.controls['password'].value || !this.signupForm.controls['confirmPassword'].value) {
            return;
        }
        if (this.f['password'].value === this.f['confirmPassword'].value) {
            this.authService.register(this.f['email'].value, this.f['password'].value).subscribe({
                next: (value) => {
                    console.warn(value.status);
                }, error: (err) => {
                    console.warn(err.message);
                }
            });
        }
        else {
            alert('Password doesnot match');
        }
    }
};
SignupComponent = __decorate([
    Component({
        selector: 'app-signup',
        templateUrl: './signup.component.html',
        styleUrls: ['./signup.component.css']
    })
], SignupComponent);
export { SignupComponent };
//# sourceMappingURL=signup.component.js.map