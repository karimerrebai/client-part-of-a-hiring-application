import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateoffreRoutingModule } from './createoffre-routing.module';
import { CreateoffreComponent } from './createoffre.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CreateoffreComponent
  ],
  imports: [
    CommonModule,
    CreateoffreRoutingModule, 
    ReactiveFormsModule, 
    FormsModule
  ]
})
export class CreateoffreModule { }
