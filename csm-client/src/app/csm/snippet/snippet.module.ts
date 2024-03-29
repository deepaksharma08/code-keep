import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {SplitterModule} from 'primeng/splitter';
import {TableModule} from 'primeng/table'
import { SnippetComponent } from './snippet.component';
import { EditSnippetDialogModule } from 'src/app/shared/edit-snippet-dialog/edit-snippet-dialog.module';

@NgModule({
  declarations: [SnippetComponent],
  imports: [
    CommonModule,
    SplitterModule,
    TableModule,
    EditSnippetDialogModule
  ],
  exports: [
    SplitterModule,
    TableModule,
    SnippetComponent,
  ]
})
export class SnippetModule { }
