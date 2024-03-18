import { HTTP_INTERCEPTORS, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, finalize } from "rxjs";
import { BlockUICustomService } from "src/app/services/block-ui.service";

@Injectable()
export class SpinnerInterceptor implements HttpInterceptor {
    callCount: number = 0;

    constructor(private blockUi: BlockUICustomService) {
    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        this.incrementCallCount();
        this.showHideBlockUi();
        return next.handle(req).pipe(finalize(() => {
            this.decrementCallCount();
            this.showHideBlockUi();
        })
        )
    }

    private incrementCallCount() {
        this.callCount = this.callCount + 1;

    }

    private showHideBlockUi() {
        if (this.callCount > 0) {
            this.blockUi.showBlockUi();
        } else {
            this.blockUi.hideBlockUi();
        }
    }

    private decrementCallCount() {
        this.callCount = this.callCount === 0 ? this.callCount : this.callCount - 1;
    }

}

export const spinnerInterceptorProvider = [
    { provide: HTTP_INTERCEPTORS, useClass: SpinnerInterceptor, multi: true }
]