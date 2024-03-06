import { Route } from "@angular/router";
import { LoginComponent } from "./login.component";

export const loginRoute: Route[] = [
    {
        path: '',
        component: LoginComponent
    },

    {
        path: 'login',
        component: LoginComponent
    }
]