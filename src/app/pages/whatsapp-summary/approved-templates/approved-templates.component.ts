import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-approved-templates',
  templateUrl: './approved-templates.component.html',
  styleUrls: ['./approved-templates.component.scss']
})
export class ApprovedTemplatesComponent implements OnInit {
  config: any;
  searchText = '';
  dataSource: any;
  users = [{
    label: 'none set',
    apiKeys: 'fftt456765gjkkjhi83093985',
    created: 'Nov 01, 2020',
    status: 'Active',
    action: ''
  }, {
    label: 'none set',
    apiKeys: 'fftt456765gjkkjhi83093985',
    created: 'Nov 01, 2020',
    status: 'Active',
    action: ''
  }, {
    label: 'none set',
    apiKeys: 'fftt456765gjkkjhi83093985',
    created: 'Nov 01, 2020',
    status: 'Active',
    action: ''
  }, {
    label: 'none set',
    apiKeys: 'fftt456765gjkkjhi83093985',
    created: 'Nov 01, 2020',
    status: 'Active',
    action: ''
  }, {
    label: 'none set',
    apiKeys: 'fftt456765gjkkjhi83093985',
    created: 'Nov 01, 2020',
    status: 'Active',
    action: ''
  },]
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
