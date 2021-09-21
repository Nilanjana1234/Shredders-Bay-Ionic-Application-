import { Component, OnInit } from '@angular/core';
import { APIService } from '../../services/api.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.page.html',
  styleUrls: ['./customer.page.scss'],
})
export class CustomerPage implements OnInit {
  data: any;
  list: any;
  userDetails: any;

  constructor(private apiService: APIService) { }

  ngOnInit() {
    this.userDetails = localStorage.getItem('userDetails');
    alert(this.userDetails);
    this.getProducts();
  }

  getProducts(){

    this.apiService.getProducts().toPromise().then((res) => {
      console.log(res);
      this.data=res;
      this.list=this.data.slice(0,9);
    }).catch((err)=> {
      console.log('Error' + err);
    });

  }

}
