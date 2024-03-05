import { BaseComponent } from "./base.component";
import { loginRoute } from "./login/login.route";
import { signupRoute } from "./signup/signup.route";
export const baseRoute = [
    {
        path: '',
        component: BaseComponent,
        children: [
            ...loginRoute,
            ...signupRoute
        ]
    }
];
//# sourceMappingURL=base.route.js.map