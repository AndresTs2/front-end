import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonajesRoutingModule } from './personajes-routing.module';
import { GetComponent } from './get/get.component';


@NgModule({
  declarations: [
    GetComponent
  ],
  imports: [
    CommonModule,
    PersonajesRoutingModule
  ]
})
export class PersonajesModule { }
