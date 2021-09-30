import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { APIService } from '../services/api.service';
import * as bcrypt from 'bcryptjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm: FormGroup;
  data: any;
  role: any;
  errorMsg: string;
  successMsg: string;


  constructor(
    private apiService: APIService,
    private router: Router,
    public fb: FormBuilder,
    private activateRoute: ActivatedRoute) { }

  ngOnInit() {
    this.role = this.activateRoute.snapshot.params.role;
    this.loginForm = this.fb.group({
      email: [''],
      password: [''],
    });
  }
  submitForm()
  {
    if (!this.loginForm.valid) {
      return false;
    } else {
      this.apiService.getbyEmail(this.loginForm.value.email).toPromise().then((res) => {
          this.data=res;
            if(this.data.password===this.loginForm.value.password)
            {
              if(this.role === 1 && this.data.userRole === 1){
                this.successMsg='Login Successfully';
                this.errorMsg = '';
                this.loginForm.reset();
                localStorage.setItem('userDetails', JSON.stringify(this.data));
                this.router.navigate(['dealer']);
              }
              if(this.role === 0 || this.data.userRole === 0){
                this.successMsg='Login Successfully';
                this.errorMsg = '';
                this.loginForm.reset();
                localStorage.setItem('userDetails', JSON.stringify(this.data));
                this.router.navigate(['customer']);
              }
            }
            else{
              this.errorMsg='Invalid Id Or Password';
              this.successMsg = '';
              this.loginForm.reset();
            }
      }).catch(err=> {
        // this.errorMsg = error.message;
        this.errorMsg='User Not Exist';
        this.successMsg = '';
        console.log(err.message);
        this.loginForm.reset();
        });
      }
  }
}
