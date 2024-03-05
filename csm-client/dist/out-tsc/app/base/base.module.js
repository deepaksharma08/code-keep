import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginModule } from './login/login.module';
import { SignupModule } from './signup/signup.module';
import { BaseComponent } from './base.component';
import { RouterModule } from '@angular/router';
let BaseModule = class BaseModule {
};
BaseModule = __decorate([
    NgModule({
        declarations: [
            BaseComponent
        ],
        imports: [
            CommonModule,
            LoginModule,
            SignupModule,
            RouterModule
        ]
    })
], BaseModule);
export { BaseModule };
//# sourceMappingURL=base.module.js.map