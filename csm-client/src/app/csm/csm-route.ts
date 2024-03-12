import { Route } from "@angular/router";
import { CsmComponent } from "./csm.component";
import { snippetRoute } from "./snippet/snippet.route";
import { processRoute } from "./process/process.route";
import { commandRoute } from "./commands/commands.route";
import { AuthGuard } from "../core/guard/auth-guard.guard";

export const csmRoutes: Route[] = [
    {
        path: 'csm',
        component: CsmComponent,
        canActivate: [AuthGuard],
        children: [
            ...snippetRoute,
            ...processRoute,
            ...commandRoute
        ]
    }
]