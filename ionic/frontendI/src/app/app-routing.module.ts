import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    loadChildren: () => import('./pages/inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'individual/:id',
    loadChildren: () => import('./pages/individual/individual.module').then( m => m.IndividualPageModule)
  },
  {
    path: 'search-bar',
    loadChildren: () => import('./pages/search-bar/search-bar.module').then( m => m.SearchBarPageModule)
  },
  {
    path: 'secciones/:seccion',
    loadChildren: () => import('./pages/secciones/secciones.module').then( m => m.SeccionesPageModule)
  },  {
    path: 'tabs',
    loadChildren: () => import('./pages/tabs/tabs.module').then( m => m.TabsPageModule)
  }




];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
