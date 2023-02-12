import { Component, ElementRef, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  @Input() sideNavStatus: boolean = false;
  menuList = [{
    number: '1',
    name: 'Dashboard',
    icon: 'fa fa-tachometer',
    link: 'dashboard',
    
  }, {
    number: '2',
    name: 'Templates',
    icon: 'fa fa-window-restore',
    link: 'templates'
  }, {
    number: '3',
    name: 'Messaging',
    icon: 'fa fa-comments',
    link: 'messaging'
  }, {
    number: '4',
    name: 'Users',
    icon: 'fa fa-users',
    link: 'users'
  }, {
    number: '5',
    name: 'Summary',
    icon: 'fa fa-th-large',
    link: 'summary'
  }, {
    number: '6',
    name: 'Report',
    icon: 'fa fa-list-alt',
    link: 'report'
  }, {
    number: '7',
    name: 'Settings',
    icon: 'fa fa-cog',
    link: 'settings'
  }]
  constructor(private el: ElementRef) { }




  ngOnInit(): void {
  }

}
