import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogModule } from 'primeng/dialog';
import { EditSnippetDialogComponent } from './edit-snippet-dialog.component';



@NgModule({
  declarations: [EditSnippetDialogComponent],
  imports: [
    CommonModule,
    DialogModule
  ],
  exports: [
    EditSnippetDialogComponent
  ]
})
export class EditSnippetDialogModule { }
