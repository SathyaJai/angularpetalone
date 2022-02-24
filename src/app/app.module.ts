import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { appRoutes } from './app.routes';
import { AppComponent } from './app.component';
import { PetsmissingComponent } from './petsmissing/petsmissing.component';
import { HeadercomponentComponent } from './headercomponent/headercomponent.component';
import { LoginComponentComponent } from './login-component/login-component.component';
import { FooterComponentComponent } from './footer-component/footer-component.component';
import {PetsaloneService} from "./service/petsalone.service";
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule,HttpClient } from '@angular/common/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { FormsModule } from '@angular/forms';
import { AdminComponentComponent } from './admin-component/admin-component.component';
import { AdminService} from './service/adminService.service';

import  {authInterceptorProviders} from './interceptor/auth.interceptor';
import { AboutpetdetailsComponent } from './aboutpetdetails/aboutpetdetails.component';
import { AboutpetComponent } from './aboutpet/aboutpet.component';
import { RoleComponent } from './role/role.component'
@NgModule({
  declarations: [
    AppComponent,
    PetsmissingComponent,
    HeadercomponentComponent,
    LoginComponentComponent,
    FooterComponentComponent,
    AdminComponentComponent,
    AboutpetdetailsComponent,
    AboutpetComponent,
    RoleComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes) ,
    HttpClientModule,
    AccordionModule.forRoot(),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [PetsaloneService,AdminService,authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
