import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



const angular = [
  CommonModule
];


const modules = [
  ...angular
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
