import { Route } from "@angular/Router";
import { LoginComponent } from "./login/login.component";

export const routerConfig : Route[] = [
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: '**',
        redirectTo: 'login'
    },
];
