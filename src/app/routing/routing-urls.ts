import { Routes } from "@angular/router";



const websiteRoutes: Routes = [
    {
        path: '',
        loadChildren: () => import('../component/home/home.module').then((m) => m.HomeModule),
    },
    {
        path: 'contact',
        loadChildren: () => import('../component/contact/contact.module').then((m) => m.ContactModule),
    }
]



export const routesUrl: Routes = [...websiteRoutes];