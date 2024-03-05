import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
let SaveSnippetDialogComponent = class SaveSnippetDialogComponent {
    constructor(snippetService) {
        this.snippetService = snippetService;
        this.display = false;
        this.snippetForm = new FormGroup({
            snippetText: new FormControl('', Validators.required),
        });
    }
    ngOnInit() {
    }
    showDialog() {
        this.display = true;
    }
    closeDialog() {
        this.display = false;
    }
    saveSnippet() {
        this.snippetService.getCodeSnippet(this.snippetForm.controls['snippetText'].value).subscribe({
            next: (value) => {
            }, error(error) {
                console.error(error.message);
            }
        });
    }
};
SaveSnippetDialogComponent = __decorate([
    Component({
        selector: 'save-snippet-dialog',
        templateUrl: './save-snippet-dialog.component.html',
        styleUrls: ['./save-snippet-dialog.component.css']
    })
], SaveSnippetDialogComponent);
export { SaveSnippetDialogComponent };
//# sourceMappingURL=save-snippet-dialog.component.js.map