import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PetsmissingComponent } from './petsmissing/petsmissing.component';
import { LoginComponentComponent} from "./login-component/login-component.component"

import {AdminComponentComponent} from "./admin-component/admin-component.component"
import {AboutpetdetailsComponent} from "./aboutpetdetails/aboutpetdetails.component"

export const appRoutes: Routes = [
  { path: '',   redirectTo: 'home', pathMatch: 'full'},
  { path: 'home',  component: PetsmissingComponent },
  { path: 'login',  component: LoginComponentComponent },
  {path : 'adminpanel' , component :AdminComponentComponent },
  {path : 'addmissingpets' , component :AboutpetdetailsComponent }
 
];
