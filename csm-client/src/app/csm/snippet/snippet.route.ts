import { Route } from "@angular/router";
import { SnippetComponent } from "./snippet.component";

export const snippetRoute: Route[] = [
    {
        path: 'snippet',
        component: SnippetComponent
    }
]