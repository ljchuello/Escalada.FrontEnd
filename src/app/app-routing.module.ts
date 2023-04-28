import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {E404Component} from './shared/components/e404/e404.component';
import {LoginGuard} from './shared/guards/login.guard';
import {Enlace} from './Config';
import {MasterPageComponent} from './shared/components/master-page/master-page.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: Enlace.Home,
  },
  {
    path: Enlace.Auth,
    loadChildren: () => import('./auth/auth.module').then(x => x.AuthModule)
  },
  {
    path: Enlace.Home,
    loadChildren: () => import('./home/home.module').then(x => x.HomeModule),
    canActivate: [LoginGuard],
  },
  {
    path: Enlace.Aplicacion,
    loadChildren: () => import('./aplicacion/aplicacion.module').then(x => x.AplicacionModule),
    canActivate: [LoginGuard],
  },
  {
    path: '**',
    component: MasterPageComponent,
    canActivate: [LoginGuard],
    children: [
      {
        path: '',
        component: E404Component,
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
