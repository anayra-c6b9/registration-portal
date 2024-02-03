import { Route } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { SignupComponent } from "./signup/signup.component";

export const AUTH_ROUTE: Route[] = [
    {
        path: "login",
        component: LoginComponent
    },
    {
        path: "signup",
        component: SignupComponent
    },
    {
        path: "auth",
        redirectTo: "/auth/login",
        pathMatch: "full"
    }
]