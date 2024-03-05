import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SplitterModule } from 'primeng/splitter';
import { TableModule } from 'primeng/table';
import { SnippetComponent } from './snippet.component';
let SnippetModule = class SnippetModule {
};
SnippetModule = __decorate([
    NgModule({
        declarations: [SnippetComponent],
        imports: [
            CommonModule,
            ReactiveFormsModule,
            FormsModule,
            SplitterModule,
            TableModule,
        ],
        exports: [
            ReactiveFormsModule,
            SplitterModule,
            TableModule,
            SnippetComponent
        ]
    })
], SnippetModule);
export { SnippetModule };
//# sourceMappingURL=snippet.module.js.map