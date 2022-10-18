import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { NavigationService } from 'client/src/app/services/sideNav.navigation.service';
import { Observable } from 'rxjs';
// import { SideNavDirection } from './side-nav-direction';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SideNavComponent implements OnInit {

  showSideNav: Observable<boolean> | undefined;

  @Input() sidenavTemplateRef: any;
  @Input() duration: number = 0.25;
  @Input() navWidth: number = window.innerWidth;
  //@Input() direction: SideNavDirection = SideNavDirection.Left;
  
  constructor(private navService: NavigationService) {}

  ngOnInit(): void {
    this.showSideNav = this.navService.getShowNav();
  }

  onSidebarClose() {
    this.navService.setShowNav(false);
  }
}