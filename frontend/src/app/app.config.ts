import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http'; // Necesario para Punto 7
import { provideStore } from '@ngrx/store'; // Necesario para Punto 8
import { routes } from './app.routes';

// Importamos lo de los Puntos 3, 4 y 5 que definimos antes
import { MI_CONFIGURACION, ServicioBase, ServicioReal, ServicioAlias } from './app.config.types'; 

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes),
    provideHttpClient(),
    provideStore(), // Configuración básica de Redux
    
    // Punto 3: Inyección de un literal con InjectionToken
    { provide: MI_CONFIGURACION, useValue: 'Configuración de Producción' },
    
    // Punto 4: useClass para vincular interfaz/base a clase concreta
    { provide: ServicioBase, useClass: ServicioReal },
    
    // Punto 5: useExisting para vincular dos clases compatibles
    { provide: ServicioReal, useExisting: ServicioAlias },
    ServicioAlias
  ]
};