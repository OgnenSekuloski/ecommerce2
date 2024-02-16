import { Routes } from '@angular/router';
import { LoginComponent } from './admin/login/login.component';
import { LayoutComponent } from './admin/layout/layout.component';
import { ProductsComponent } from './admin/products/products.component';
import { LandingComponent } from './user/landing/landing.component';
import { ContactComponent } from './user/contact/contact.component';

export const routes: Routes = [
    {
        path:'',
        redirectTo:'shop',
        pathMatch:'full'
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'shop',
        component: LandingComponent
    },
    {
        path: 'contact',
        component: ContactComponent
    },
    {
        path:'',
        component: LayoutComponent,
        children: [
            {
                path: 'products',
                component: ProductsComponent
            },
        ]
    }
];
