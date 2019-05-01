import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  location = [];
  items: MenuItem[];

  constructor(private router: Router) { }

  ngOnInit() {
    this.getInitOptions();
  }

  private getInitOptions(): void { }
}
