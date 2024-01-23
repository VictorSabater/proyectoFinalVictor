import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PrincipalComponent} from "./components/principal/principal.component";
import {NoticiaEditComponent} from "./components/noticia-edit/noticia-edit.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: '/principal',
    pathMatch: 'full'
  },
  {
    path: 'principal',
    component: PrincipalComponent
  },
  {
    path: 'principal/add',
    component: NoticiaEditComponent
  },
  {
    path: 'principal/edit/:id',
    component: NoticiaEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
