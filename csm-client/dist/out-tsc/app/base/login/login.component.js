import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
let LoginComponent = class LoginComponent {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
        this.loginForm = new FormGroup({
            email: new FormControl('', Validators.required),
            password: new FormControl('', Validators.required)
        });
    }
    ngOnInit() {
    }
    get f() {
        return this.loginForm.controls;
    }
    performLogin() {
        if (!this.loginForm.controls['email'].value || !this.loginForm.controls['password'].value) {
            return;
        }
        this.authService.login(this.f['email'].value, this.f['password'].value).subscribe({
            next: (value) => {
                if (value.status === "SUCCESS") {
                    this.router.navigateByUrl('csm');
                }
            }, error: (err) => {
                alert("Some error occured while logging in");
            }
        });
    }
};
LoginComponent = __decorate([
    Component({
        selector: 'app-login',
        templateUrl: './login.component.html',
        styleUrls: ['./login.component.css']
    })
], LoginComponent);
export { LoginComponent };
//# sourceMappingURL=login.component.js.map