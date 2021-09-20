import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Dashboard', url: 'dashboard', icon: 'home' },
    { title: 'Location Management', url: 'all-favorite', icon: 'pin' },
    { title: 'Masters', url: 'recipes', icon: 'bookmark' },
    { title: 'Orders', url: 'orders', icon: 'bookmark' },
    { title: 'User Management', url: 'logout', icon: 'person' },
    { title: 'Contents Management', url: 'content', icon: 'mail' },
    { title: 'Reports', url: 'all-favorite', icon: 'bookmarks' },
    { title: 'Setting', url: 'recipes', icon: 'settings' },
    { title: 'Logs', url: '/folder/Filter', icon: 'power' },
  ];
  constructor(
  ) {}
}
