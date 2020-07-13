import {Routes} from '@angular/router';
export const AppRoutes: Routes = [
    {
        path: 'home',
        loadChildren: './home/home.module#HomeModule'
    },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    // {
    //     path:'**',
    //     redirectTo:'./home/home.module#HomeModule'
    // }
]