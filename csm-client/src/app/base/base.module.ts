import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { LoginModule } from './login/login.module';
import { SignupModule } from './signup/signup.module';
import { BaseComponent } from './base.component';
import { RouterModule } from '@angular/router';



@NgModule({
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
export class BaseModule { }
