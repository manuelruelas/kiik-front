import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css']
})
export class MenuBarComponent implements OnInit {
  items: MenuItem[];
  constructor() { }

  ngOnInit() {
    this.items = [
      {
        label: 'Voluntarios',
        icon: 'pi pi-users'
      },
      {
        label: 'Peticiones',
        icon: 'pi pi-globe'
      },
      {
        label: 'Perfil',
        icon: 'pi pi-user'
      }
    ];
  }

}
