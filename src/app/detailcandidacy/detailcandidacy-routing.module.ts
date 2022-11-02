import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailcandidacyComponent } from './detailcandidacy.component';

const routes: Routes = [{ path: '', component: DetailcandidacyComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetailcandidacyRoutingModule { }
