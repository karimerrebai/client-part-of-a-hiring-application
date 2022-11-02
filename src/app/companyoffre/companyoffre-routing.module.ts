import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompanyoffreComponent } from './companyoffre.component';

const routes: Routes = [{ path: '', component: CompanyoffreComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompanyoffreRoutingModule { }
