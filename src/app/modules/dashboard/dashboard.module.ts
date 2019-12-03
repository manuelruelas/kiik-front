import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { VolunteersComponent } from './pages/volunteers/volunteers.component';
import { VolunteerCardComponent } from './components/volunteer-card/volunteer-card.component';
import { RequestComponent } from './pages/request/request.component';
import { RequestCardComponent } from './components/request-card/request-card.component';

const components = [
  MenuBarComponent
]
const pages = [
  DashboardComponent,
  HomeComponent
]

@NgModule({
  declarations: [
    ...components,
    ...pages,
    LoginComponent,
    SignupComponent,
    VolunteersComponent,
    VolunteerCardComponent,
    RequestComponent,
    RequestCardComponent
    
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule
  ],
  entryComponents:[
    LoginComponent,
    SignupComponent
  ]
})
export class DashboardModule { }
