import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from './hero/hero.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { CsmComponent } from './csm.component';
import { SnippetModule } from './snippet/snippet.module';
import { NavBarModule } from './nav-bar/nav-bar.module';
import { RouterModule } from '@angular/router';
import { SaveSnippetDialogModule } from '../shared/save-snippet-dialog/save-snippet-dialog.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommandsModule } from './commands/commands.module';
import { ProcessModule } from './process/process.module';



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
    SaveSnippetDialogModule,
    BrowserAnimationsModule,
    CommandsModule,
    ProcessModule
  ],
})
export class CsmModule { }
