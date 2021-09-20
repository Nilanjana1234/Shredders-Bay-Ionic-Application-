import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-frontend',
  templateUrl: './frontend.page.html',
  styleUrls: ['./frontend.page.scss'],
})
export class FrontendPage implements OnInit {

  constructor(
    private router: Router,
    public menuCtrl: MenuController,
  ) { }

  ngOnInit() {

    this.menuCtrl.enable(false);
  }
   home(val){
     this.router.navigate(['home', {role:val}]);
  }

}
