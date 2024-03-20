import { Injectable } from "@angular/core";
import { BlockUI, NgBlockUI } from "ng-block-ui";

@Injectable(
    { providedIn: 'root' }
)
export class BlockUICustomService {

    @BlockUI() blockUI: NgBlockUI

    showBlockUi() {
        if (!this.blockUI.isActive) {
            this.blockUI.start();
        }
    }

    hideBlockUi() {
        this.blockUI.stop();
    }
}