import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProcessComponent } from './process.component';
import { TableModule } from 'primeng/table';
import { SnippetModule } from '../snippet/snippet.module';



@NgModule({
  declarations: [ProcessComponent],
  imports: [
    CommonModule,
    TableModule,
    SnippetModule
  ],
  exports: [
    ProcessComponent,
    TableModule,
    SnippetModule
  ]
})
export class ProcessModule { }
