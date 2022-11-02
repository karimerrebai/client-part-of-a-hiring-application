import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailoffreRoutingModule } from './detailoffre-routing.module';
import { DetailoffreComponent } from './detailoffre.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [DetailoffreComponent],
  imports: [CommonModule, DetailoffreRoutingModule, ReactiveFormsModule],
})
export class DetailoffreModule {}
