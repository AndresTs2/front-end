import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfesoresRoutingModule } from './profesores-routing.module';
import { GetComponent } from './get/get.component';


@NgModule({
  declarations: [
    GetComponent
  ],
  imports: [
    CommonModule,
    ProfesoresRoutingModule
  ]
})
export class ProfesoresModule { }
