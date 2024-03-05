import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login.component';
let LoginModule = class LoginModule {
};
LoginModule = __decorate([
    NgModule({
        declarations: [LoginComponent],
        imports: [
            CommonModule,
            ReactiveFormsModule
        ],
        exports: []
    })
], LoginModule);
export { LoginModule };
//# sourceMappingURL=login.module.js.map