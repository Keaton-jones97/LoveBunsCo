import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-nav-content',
  templateUrl: './side-nav-content.component.html',
  styleUrls: ['./side-nav-content.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SideNavContentComponent implements OnInit {

  navItems = [
    { label: 'Home', route: '/home'},
    { label: 'Shop', route: '/shop'},
    { label: 'Blog', route: '/blog'},
    { label: 'Donations', route: '/donations'},
    { label: 'Contact Us', route: '/contact-us'},
    { label: 'Customer Reviews', route: '/reviews'}
  ];

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onNavigationSelection(navItem: any) {
    this.router.navigate([navItem.route]);
  }
}