import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { NavParams } from '@ionic/angular';
import { APIService } from '../services/api.service';
@Component({
  selector: 'app-customer',
  templateUrl: './customer.page.html',
  styleUrls: ['./customer.page.scss'],
  providers: [NavParams],

})
export class CustomerPage implements OnInit {
  role: any;

  constructor(  private apiService: APIService,
    private router: Router,
    private activateRoute: ActivatedRoute) { }

  ngOnInit() {
    this.role = this.activateRoute.snapshot.params.role;

  }

}
