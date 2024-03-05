import { Route } from "@angular/router";
import { BaseComponent } from "./base.component";
import { loginRoute } from "./login/login.route";
import { signupRoute } from "./signup/signup.route";

export const baseRoute : Route[] = [
    {
        path: '',
        component: BaseComponent,
        children: [
            ...loginRoute,
            ...signupRoute
        ]
    }
]