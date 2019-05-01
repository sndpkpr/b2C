import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../../services/global.service';
import { itemArrObj } from '../../constants/itemArr';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  itemArr: itemArrObj[] = [];
  constructor(private globalService: GlobalService) { }
  ngOnInit() {
    this.fetchInitData();
  }

  private fetchInitData() {
    this.globalService.fetchJson().subscribe(res => {
      this.itemArr = res.body.data;
    })
  }

}
