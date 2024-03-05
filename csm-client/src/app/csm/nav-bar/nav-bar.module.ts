import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar.component';
import { SaveSnippetDialogModule } from 'src/app/shared/save-snippet-dialog/save-snippet-dialog.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SaveSnippetDialogModule
  ]
})
export class NavBarModule { }
