import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { DashboardTemplateComponent } from '../dashboard-template/dashboard-template.component';


@NgModule({
  declarations: [
    DashboardComponent,
    SideMenuComponent,
    MenuBarComponent,
    DashboardTemplateComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule
  ]
})
export class DashboardModule { }
