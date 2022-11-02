import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompanyoffreRoutingModule } from './companyoffre-routing.module';
import { CompanyoffreComponent } from './companyoffre.component';


@NgModule({
  declarations: [
    CompanyoffreComponent
  ],
  imports: [
    CommonModule,
    CompanyoffreRoutingModule
  ]
})
export class CompanyoffreModule { }
