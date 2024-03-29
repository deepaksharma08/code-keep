import { Route } from "@angular/router";
import { CsmComponent } from "./csm.component";
import { snippetRoute } from "./snippet/snippet.route";
import { AuthGuard } from "../core/guard/auth-guard.guard";

export const csmRoutes: Route[] = [
    {
        path: 'csm',
        component: CsmComponent,
        canActivate: [AuthGuard],
        children: [
            ...snippetRoute
        ]
    }
]