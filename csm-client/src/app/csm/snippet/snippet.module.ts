import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {SplitterModule} from 'primeng/splitter';
import {TableModule} from 'primeng/table'

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    SplitterModule,
    TableModule
  ],
  exports: [
    ReactiveFormsModule,
    SplitterModule,
    TableModule
  ]
})
export class SnippetModule { }
