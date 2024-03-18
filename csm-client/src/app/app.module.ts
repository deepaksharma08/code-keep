import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http'
import { CsmModule } from './csm/csm.module';
import { BaseModule } from './base/base.module';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { authInterceptorProviders } from './core/interceptor/auth.interceptor';
import { BlockUIModule } from 'ng-block-ui';
import { spinnerInterceptorProvider } from './core/interceptor/spinner.interceptor';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    CsmModule,
    BaseModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    BlockUIModule.forRoot(),
  ],
  providers: [authInterceptorProviders, spinnerInterceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
