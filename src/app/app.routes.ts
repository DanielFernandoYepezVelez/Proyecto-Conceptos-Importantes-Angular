import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { HomeComponent } from './components/home/home.component';
import { UsuarioComponent } from './components//usuario/usuario.component';

/* Rutas Hijas */
import { USUARIO_ROUTES } from './components/usuario/usuario.routes';

const APP_ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  {
    path: 'usuario/:idUser',
    component: UsuarioComponent,
    children: USUARIO_ROUTES,
  },
  { path: '**', pathMatch: 'full', redirectTo: '/home' },
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
