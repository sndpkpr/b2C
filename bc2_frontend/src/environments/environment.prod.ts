import { InjectionToken, Injector, enableProdMode } from '@angular/core';
export class Environment {
  production = true;
  baseUrl = 'http://localhost:3000/';
}

const injector = Injector.create([
  { provide: Environment, useClass: Environment, deps: [] }
]);

export const environment: Environment = injector.get(Environment);

// Remove all console messages
console.log = function () { };
