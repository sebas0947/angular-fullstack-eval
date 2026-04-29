import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  template: `
    <h1>Evaluación Fullstack</h1>
    <nav>
      <a routerLink="/dashboard">Entrar al Dashboard</a>
    </nav>
    <hr>
    <router-outlet></router-outlet>
  `
})
export class AppComponent { } // Este nombre es la clave