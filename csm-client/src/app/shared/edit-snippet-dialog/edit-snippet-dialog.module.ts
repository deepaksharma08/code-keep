import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogModule } from 'primeng/dialog';
import { EditSnippetDialogComponent } from './edit-snippet-dialog.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [EditSnippetDialogComponent],
  imports: [
    CommonModule,
    DialogModule,
    ReactiveFormsModule
  ],
  exports: [
    ReactiveFormsModule,
    EditSnippetDialogComponent
  ]
})
export class EditSnippetDialogModule { }
