import { Route } from "@angular/router";
import { CommandsComponent } from "./commands.component";

export const commandRoute: Route[] = [
    {
        path: 'commands',
        component: CommandsComponent
    }
]