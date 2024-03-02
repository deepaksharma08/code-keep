import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from './hero/hero.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SnippetComponent } from './snippet/snippet.component';
import { CommandsComponent } from './commands/commands.component';
import { ProcessComponent } from './process/process.component';
import { CsmComponent } from './csm.component';
import { SnippetModule } from './snippet/snippet.module';
import { NavBarModule } from './nav-bar/nav-bar.module';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    HeroComponent,
    CsmComponent,
    NavBarComponent,
    SnippetComponent
  ],
  imports: [
    CommonModule,
    SnippetModule,
    NavBarModule
  ],
})
export class CsmModule { }
