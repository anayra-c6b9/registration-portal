import { Route } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";
import { DocsComponent } from "./docs/docs.component";

export const BLOG_ROUTE: Route[] = [
    {
        path: "home",
        component: HomeComponent,
    },
    {
        path: "about",
        component: AboutComponent,
    },
    {
        path: "docs",
        component: DocsComponent,
    },
    {
        path: "",
        redirectTo: "/home",
        pathMatch: "full"
    }
]