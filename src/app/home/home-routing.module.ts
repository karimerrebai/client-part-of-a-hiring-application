import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApplyComponent } from '../apply/apply.component';
import { CompanyoffreComponent } from '../companyoffre/companyoffre.component';
import { CreateoffreComponent } from '../createoffre/createoffre.component';
import { DetailcandidacyComponent } from '../detailcandidacy/detailcandidacy.component';
import { DetailoffreComponent } from '../detailoffre/detailoffre.component';
import { EditprofileComponent } from '../editprofile/editprofile.component';
import { LayoutsComponent } from '../layouts/layouts.component';
import { PagenotfoundComponent } from '../pagenotfound/pagenotfound.component';
import { ProfilComponent } from '../profil/profil.component';
import { RegisterComponent } from '../register/register.component';
import { HomeComponent } from './home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: '', component: LayoutsComponent },
      { path: 'detailoffre/:id', component: DetailoffreComponent },
      { path: 'register', component: RegisterComponent },
      { path: 'apply/:id', component: ApplyComponent },
      { path: 'createoffre', component: CreateoffreComponent },
      { path: 'profil', component: ProfilComponent },
      { path: 'companyOffre/:id', component: CompanyoffreComponent },
      { path: 'detailcandidacy/:id', component: DetailcandidacyComponent },
      { path: 'edit', component: EditprofileComponent },
    ],
  },
  { path: '**', pathMatch: 'full', component: PagenotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
