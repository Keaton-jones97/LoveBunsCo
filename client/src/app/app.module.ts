import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { HomeComponent } from './home/home.component';
import { MaterialsUiModule } from './materialsUi.module';
import { ErrorComponent } from './error/error.component';
import { SideNavContentComponent } from './side-nav-content/side-nav-content.component';
import { ShopComponent } from './shop/shop.component';
import { BlogComponent } from './blog/blog.component';
import { DonationsComponent } from './donations/donations.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SideNavComponent,
    HomeComponent,
    ErrorComponent,
    SideNavContentComponent,
    ShopComponent,
    BlogComponent,
    DonationsComponent,
    ReviewsComponent,
    ContactUsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialsUiModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
