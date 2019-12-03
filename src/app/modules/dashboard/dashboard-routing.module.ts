import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { HomeComponent } from './pages/home/home.component';
import { VolunteersComponent  } from "./pages/volunteers/volunteers.component";
import { RequestComponent } from './pages/request/request.component';

const routes: Routes = [
  { path: '', component: DashboardComponent, children: [
    {path:'', component:HomeComponent},
    {path:'volunteers', component: VolunteersComponent },
    {path:'request', component:RequestComponent}
  ]}
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
