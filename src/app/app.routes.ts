import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FormComponent } from './form/form.component';
import { ApiComponent } from './api/api.component';
import { RouterModule } from '@angular/router';

export const routes: Routes = [
    {path: "home", component: HomeComponent},
    {path: "", redirectTo: "/home", pathMatch: "full"},
    {path: "form", component: FormComponent},
    {path: "api", component: ApiComponent}
];
