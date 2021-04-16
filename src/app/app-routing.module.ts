import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'projetos',
    pathMatch: 'full'
  },
  {
    path: 'projetos',
    loadChildren: () => import('./pages/project/project.module').then(m => m.ProjectModule)
  },
  {
    path: 'person',
    loadChildren: () => import('./pages/person/person.module').then(m => m.PersonModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
