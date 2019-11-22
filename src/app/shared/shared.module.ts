import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CardModule} from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import {DropdownModule} from 'primeng/dropdown';
import {ButtonModule} from 'primeng/button';
import {MenubarModule} from 'primeng/menubar';
import {MenuItem} from 'primeng/api';


const angular = [
  CommonModule
];
const primeng = [
  CardModule,
  InputTextModule,
  DropdownModule,
  ButtonModule,
  MenubarModule,
];

const modules = [
  ...angular,
  ...primeng
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
