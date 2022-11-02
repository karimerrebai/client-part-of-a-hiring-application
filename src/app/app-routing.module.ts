import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
  },

  {
    path: 'register',
    loadChildren: () =>
      import('./register/register.module').then((m) => m.RegisterModule),
  },
  {
    path: 'detailoffre',
    loadChildren: () =>
      import('./detailoffre/detailoffre.module').then(
        (m) => m.DetailoffreModule
      ),
  },
  { path: 'apply', loadChildren: () => import('./apply/apply.module').then(m => m.ApplyModule) },
  { path: 'createoffre', loadChildren: () => import('./createoffre/createoffre.module').then(m => m.CreateoffreModule) },
  { path: 'profil', loadChildren: () => import('./profil/profil.module').then(m => m.ProfilModule) },
  { path: 'companyoffre', loadChildren: () => import('./companyoffre/companyoffre.module').then(m => m.CompanyoffreModule) },
  { path: 'detailcandidacy', loadChildren: () => import('./detailcandidacy/detailcandidacy.module').then(m => m.DetailcandidacyModule) },
  { path: 'editprofile', loadChildren: () => import('./editprofile/editprofile.module').then(m => m.EditprofileModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
