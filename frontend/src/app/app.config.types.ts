import { InjectionToken } from '@angular/core';

// Punto 3: InjectionToken propio
export const MI_CONFIGURACION = new InjectionToken<string>('mi.config');

// Punto 4: Clase base y clase real (useClass)
export class ServicioBase { 
  obtenerDatos() { return "Datos base"; } 
}

export class ServicioReal extends ServicioBase {
  override obtenerDatos() { return "Datos desde la Clase Real"; }
}

// Punto 5: Clase que hereda para el alias (useExisting)
export class ServicioAlias extends ServicioReal {}