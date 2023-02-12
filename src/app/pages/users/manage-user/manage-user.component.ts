import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manage-user',
  templateUrl: './manage-user.component.html',
  styleUrls: ['./manage-user.component.scss']
})
export class ManageUserComponent implements OnInit {
  config: any;
  searchText = '';
  dataSource: any;
  users = [{
    email: 'test@gmail.com',
    userName: 'User',
    status: 'Active',
    created: 'Nov 01, 2020',
    action: ''
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
