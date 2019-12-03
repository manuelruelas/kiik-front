import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { LayoutModule } from '@angular/cdk/layout';
import { NgbCarouselModule } from "@ng-bootstrap/ng-bootstrap";
import {MatDividerModule} from '@angular/material/divider';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';
import {ScrollingModule} from '@angular/cdk/scrolling';


const angular = [
  CommonModule
];
const cdk = [
  ScrollingModule
];
const material = [
  MatSidenavModule,
  MatToolbarModule,
  MatGridListModule,
  MatCardModule,
  MatMenuModule,
  MatIconModule,
  MatButtonModule,
  LayoutModule,
  MatDividerModule,
  MatDialogModule,
  MatFormFieldModule,
  MatInputModule,
  MatListModule
];
const bootstrap = [
  NgbCarouselModule,
  
]

const modules = [
  ...angular,
  ...material,
  ...bootstrap,
  ...cdk
];

@NgModule({
  declarations: [],
  imports: [
    ...modules
    
  ],
  exports: [
    ...modules
  ]
})
export class SharedModule { }
