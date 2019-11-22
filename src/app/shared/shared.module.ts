import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CardModule} from 'primeng/card';

const angular = [
  CommonModule
];
const primeng = [
  CardModule
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
