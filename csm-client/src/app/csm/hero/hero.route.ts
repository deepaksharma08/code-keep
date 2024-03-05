import { Route } from "@angular/router";
import { HeroComponent } from "./hero.component";

export const heroRoute: Route[] = [
    {
        path: 'hero',
        component: HeroComponent
    }
]