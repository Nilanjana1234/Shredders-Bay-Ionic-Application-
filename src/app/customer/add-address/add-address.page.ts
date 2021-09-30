import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { APIService } from '../../services/api.service';
@Component({
  selector: 'app-add-address',
  templateUrl: './add-address.page.html',
  styleUrls: ['./add-address.page.scss'],
})
export class AddAddressPage implements OnInit {
  addressForm: FormGroup;
  u_id: any;
  userData: any;
  id: any;

  constructor(
    private apiService: APIService,
    private router: Router,
    public fb: FormBuilder,
    private activateRoute: ActivatedRoute
    ) { }

  ngOnInit() {
    this.userData=JSON.parse(sessionStorage.getItem('userDetails'));
    this.id=this.userData.id;
    this.addressForm = this.fb.group({
      uId: [this.id],
      address: [''],
      city: [''],
      district: [''],
      state: [''],
      pinCode: [''],
    });
  }

  submitForm() {
    console.log(this.addressForm);
    if (!this.addressForm.valid) {
      return false;
    } else {
      this.apiService.createAdd(this.addressForm.value).subscribe(res => {
        alert(res);
        console.log(res);
        this.addressForm.reset();
        this.router.navigate(['']);
      });
    }
  }
}
