import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { APIService } from '../../services/api.service';
@Component({
  selector: 'app-my-addr',
  templateUrl: './my-addr.page.html',
  styleUrls: ['./my-addr.page.scss'],
})
export class MyAddrPage implements OnInit {
  id: any;
  userData: any;
  name: any;
  email: any;
  role: any;
  data: any;
  status: any;
  constructor(
    public apiService: APIService,
    private router: Router,
    private activateRoute: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.status=1;
    this.userData=JSON.parse(sessionStorage.getItem('userDetails'));
    this.id=this.userData.id;
    this.name=this.userData.name;
    this.email=this.userData.email;
    //alert(this.userData);
    this.getAddress();



  }
  notifications(){
    this.router.navigate(['notifications']);
  }
  getAddress() {
  this.apiService.getAddress().toPromise().then((res) => {
    console.log(res);
    this.data = res;
    console.log(this.data);
  }).catch((err) => {
    console.log('Error' + err);
  });

}
address(ids){
  alert(ids);
  this.apiService.activateAdd(ids,this.status).toPromise().then((res) => {
    this.data = res;
    console.log(this.data);
  }).catch((err) => {
    console.log('Error' + err.error);
  });
}
}

