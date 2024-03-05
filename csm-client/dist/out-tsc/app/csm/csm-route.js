import { CsmComponent } from "./csm.component";
import { snippetRoute } from "./snippet/snippet.route";
import { processRoute } from "./process/process.route";
import { commandRoute } from "./commands/commands.route";
export const csmRoutes = [
    {
        path: 'csm',
        component: CsmComponent,
        children: [
            ...snippetRoute,
            ...processRoute,
            ...commandRoute
        ]
    }
];
//# sourceMappingURL=csm-route.js.map