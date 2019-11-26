import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';


@NgModule({
  declarations: [
    DashboardComponent,
    SideMenuComponent,
    MenuBarComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule
  ]
})
export class DashboardModule { }
