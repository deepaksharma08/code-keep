import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommandsComponent } from './commands.component';
import { SplitterModule } from 'primeng/splitter';
import { TableModule } from 'primeng/table';

@NgModule({
  declarations: [CommandsComponent],
  imports: [
    CommonModule,
    SplitterModule,
    TableModule
  ],
  exports: [
    CommandsComponent,
    TableModule,
    SplitterModule,
  ]
})
export class CommandsModule { }
