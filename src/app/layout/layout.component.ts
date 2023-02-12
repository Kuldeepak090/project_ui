import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  sideNavStatus: boolean = false
  pageTitle: any;
  constructor(private router: Router, private actRoute: ActivatedRoute) {
    console.log(router.url);

    this.router.events.pipe(filter((event: any) => event instanceof NavigationEnd))
      .subscribe((event: any) => {
        if (event.url == '/') {
          this.pageTitle = "DASHBOARD"
        } else {
          this.pageTitle = event.url.slice(1).toUpperCase();
        }
      });
  }

  ngOnInit(): void {
  }

}
