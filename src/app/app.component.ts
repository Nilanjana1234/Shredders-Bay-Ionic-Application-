import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/customer/', icon: 'home' },
    { title: 'Scrap Items', url: '/scrap-items', icon: 'document' },
    { title: 'My Cart', url: '/my-cart', icon: 'cart' },
    { title: 'My Booking', url: '/my-booking', icon: 'book' },
    { title: 'My Account', url: '/my-account', icon: 'person' },
    { title: 'Notifications', url: 'notifications', icon: 'notifications' },
    // { title: 'Rate the App', url: 'Filter', icon: 'star' },
    { title: 'FAQ', url: '/faqs', icon: 'help-circle' },
    { title: 'Terms & Conditions', url: '/terms-conditions', icon: 'book' },
    { title: 'Contact Us', url: '/contact-us', icon: 'mail' },
    { title: 'Forget Password', url: '/forget-password', icon: 'help-circle' },
    { title: 'Logout' , url: '/logout', icon: 'power' },
  ];

  public tabs = [
    { title: 'Home', url: 'customer', icon: 'home' },
    { title: 'Scrap Items', url: 'scrap-items', icon: 'mail' },
    { title: 'My Bookings', url: 'my-booking', icon: 'book' },
    { title: 'My Cart', url: 'my-cart', icon: 'cart' },
    { title: 'My Account', url: 'my-account', icon: 'person' },
  ];
  constructor(
  ) {}
}
