import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommandsComponent } from './commands.component';
import { SplitterModule } from 'primeng/splitter';
import { TableModule } from 'primeng/table';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [CommandsComponent],
  imports: [
    CommonModule,
    SplitterModule,
    FormsModule,
    TableModule
  ],
  exports: [
    CommandsComponent,
    CommandsModule,
    TableModule
  ]
})
export class CommandsModule { }
