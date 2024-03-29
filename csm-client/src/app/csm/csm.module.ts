import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from './hero/hero.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { CsmComponent } from './csm.component';
import { SnippetModule } from './snippet/snippet.module';
import { NavBarModule } from './nav-bar/nav-bar.module';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [
    HeroComponent,
    CsmComponent,
    NavBarComponent,
  ],
  imports: [
    CommonModule,
    SnippetModule,
    NavBarModule,
    RouterModule,
    BrowserAnimationsModule
  ],
})
export class CsmModule { }
