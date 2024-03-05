import { __decorate } from "tslib";
import { Component, ViewChild } from '@angular/core';
let NavBarComponent = class NavBarComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
        this.router.navigateByUrl('csm/snippet');
        document.getElementById('snippet').classList.add('active');
    }
    openSaveSnippetDialog() {
        this.saveSnippetDialog.showDialog();
    }
    changeActiveTab(id) {
        switch (id) {
            case 'snippet':
                this.router.navigateByUrl('csm/snippet');
                document.getElementById('snippet').classList.add('active');
                document.getElementById('commands').classList.remove('active');
                document.getElementById('process').classList.remove('active');
                break;
            case 'commands':
                this.router.navigateByUrl('csm/commands');
                document.getElementById('commands').classList.add('active');
                document.getElementById('snippet').classList.remove('active');
                document.getElementById('process').classList.remove('active');
                break;
            case 'process':
                this.router.navigateByUrl('csm/process');
                document.getElementById('process').classList.add('active');
                document.getElementById('commands').classList.remove('active');
                document.getElementById('snippet').classList.remove('active');
                break;
            default:
                console.warn("Navigation link not recognized");
                break;
        }
    }
};
__decorate([
    ViewChild('saveDialog')
], NavBarComponent.prototype, "saveSnippetDialog", void 0);
NavBarComponent = __decorate([
    Component({
        selector: 'nav-bar',
        templateUrl: './nav-bar.component.html',
        styleUrls: ['./nav-bar.component.css']
    })
], NavBarComponent);
export { NavBarComponent };
//# sourceMappingURL=nav-bar.component.js.map