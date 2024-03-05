import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogModule } from 'primeng/dialog'
import { SaveSnippetDialogComponent } from './save-snippet-dialog.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [SaveSnippetDialogComponent],
  imports: [
    CommonModule,
    DialogModule,
    ReactiveFormsModule
  ],
  exports: [
    SaveSnippetDialogComponent,
    ReactiveFormsModule
  ]
})
export class SaveSnippetDialogModule { }
