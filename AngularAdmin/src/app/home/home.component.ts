import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  listData:any = [];

  constructor() { }

  ngOnInit() {
    // this.productSer.getProduct().subscribe((data) => {
    //   this.listData = data;
    // })
  }

}
