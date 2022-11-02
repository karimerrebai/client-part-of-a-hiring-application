import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailcandidacyRoutingModule } from './detailcandidacy-routing.module';
import { DetailcandidacyComponent } from './detailcandidacy.component';


@NgModule({
  declarations: [
    DetailcandidacyComponent
  ],
  imports: [
    CommonModule,
    DetailcandidacyRoutingModule
  ]
})
export class DetailcandidacyModule { }
