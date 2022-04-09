import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EstudiantesRoutingModule } from './estudiantes-routing.module';
import { GetComponent } from './get/get.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    GetComponent
  ],
  imports: [
    CommonModule,
    EstudiantesRoutingModule,
    ReactiveFormsModule
  ]
})
export class EstudiantesModule { }
