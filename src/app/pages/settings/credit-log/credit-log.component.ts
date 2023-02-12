import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-credit-log',
  templateUrl: './credit-log.component.html',
  styleUrls: ['./credit-log.component.scss']
})
export class CreditLogComponent implements OnInit {

  config: any;
  searchText = '';
  dataSource: any;
  users = [{
    adjusted: 'none set',
    userName: 'user name 1',
    created: 'Nov 01, 2020',
  }, {
    adjusted: 'Navitare',
    userName: 'user name 1',
    created: 'Sep 27, 2020',
  }]
  constructor() {
    this.config = {
      currentPage: 1,
      itemsPerPage: 5
    };
  }

  ngOnInit(): void {
  }
  pageChange(newPage: number) {
    this.config.currentPage = newPage
  }

}
