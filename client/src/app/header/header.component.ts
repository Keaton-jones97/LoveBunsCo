import { Router } from '@angular/router';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NavigationService } from 'client/src/app/services/sideNav.navigation.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent implements OnInit {

  constructor(private navService: NavigationService, private router: Router) { }

  ngOnInit(): void {
  }

  toggleSideNav() {
    console.log("calling showNav");
    this.navService.setShowNav(true);
  }

  returnHome(homeNav: any) {
    this.router.navigate([homeNav]);
  }

}
