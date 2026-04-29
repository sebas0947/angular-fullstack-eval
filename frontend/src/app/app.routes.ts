import { Routes } from '@angular/router';
// Importamos usando el nombre exacto que veo en tu lista: auth-guard
import { authGuard } from './auth-guard'; 
// Importamos el componente (fíjate que es ./app.ts en tu lista pero la clase se llama AppComponent)
import { AppComponent } from './app'; 

export const routes: Routes = [
  {
    path: 'dashboard',
    component: AppComponent,
    canActivate: [authGuard]
  },
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  }
];