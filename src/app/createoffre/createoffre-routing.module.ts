import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateoffreComponent } from './createoffre.component';

const routes: Routes = [{ path: '', component: CreateoffreComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreateoffreRoutingModule { }
