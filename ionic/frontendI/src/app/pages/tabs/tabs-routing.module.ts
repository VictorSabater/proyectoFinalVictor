import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: '',
        redirectTo: 'Deportes',
        pathMatch: "full"
      },
      {
        path: 'Deportes',
        loadChildren: () => import('../secciones/secciones.module').then(m => m.SeccionesPageModule)
      },
      {
        path: 'Videojuegos',
        loadChildren: () => import('../secciones/secciones.module').then(m => m.SeccionesPageModule)
      },
      {
        path: 'Lectura',
        loadChildren: () => import('../secciones/secciones.module').then(m => m.SeccionesPageModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
