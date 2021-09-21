import { Component, OnInit } from '@angular/core';
import { APIService } from '../../services/api.service';

@Component({
  selector: 'app-dealer',
  templateUrl: './dealer.page.html',
  styleUrls: ['./dealer.page.scss'],
})
export class DealerPage implements OnInit {
  data: any;
  list: any;

  constructor(private apiService: APIService,) { }

  ngOnInit() {
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
