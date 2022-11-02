import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditprofileRoutingModule } from './editprofile-routing.module';
import { EditprofileComponent } from './editprofile.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    EditprofileComponent
  ],
  imports: [
    CommonModule,
    EditprofileRoutingModule, 
    FormsModule, 
    ReactiveFormsModule
  ]
})
export class EditprofileModule { }
