import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-global',
  template: `<app-header></app-header>
  <main role="main"><router-outlet></router-outlet></main>
  <app-footer></app-footer>`
})
export class GlobalComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
