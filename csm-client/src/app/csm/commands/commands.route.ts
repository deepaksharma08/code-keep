import { Route } from "@angular/router";
import { CommandsComponent } from "./commands.component";

export const commandRoute: Route[] = [
    {
        path: 'command',
        component: CommandsComponent
    }
]