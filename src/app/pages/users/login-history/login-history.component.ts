import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-history',
  templateUrl: './login-history.component.html',
  styleUrls: ['./login-history.component.scss']
})
export class LoginHistoryComponent implements OnInit {
  config: any;
  searchText = '';
  dataSource: any;
  users = [{
    userName: 'none set',
    IPaddress: 'fftt456765gjkkjhi83093985',
    created: 'Nov 01, 2020',
  }, {
    userName: 'Navitare',
    IPaddress: 'jk076590ygghgh324vd33',
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
