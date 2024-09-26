import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { Email1Component } from './email-1/email-1.component';
import { Email2Component } from './email-2/email-2.component';
import { Email3Component } from './email-3/email-3.component';

export const routes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'email-1', component: Email1Component},
    {path: 'email-2', component: Email2Component},
    {path:'**' , component: HomeComponent}
];
