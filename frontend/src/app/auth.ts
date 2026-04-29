import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor() { }

  // Punto 1: Método para verificar si el usuario está logueado
  isLoggedIn(): boolean {
    return true; 
  }
}