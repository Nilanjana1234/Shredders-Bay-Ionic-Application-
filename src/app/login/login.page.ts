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
      alert('hello');
      this.apiService.getbyEmail(this.loginForm.value.email).toPromise().then((res) => {
        alert('hello');
          console.log(this.loginForm.value);
          console.log(res);
          this.data=res;
          console.log(this.data.password);
            if(this.data.password===this.loginForm.value.password)
            {
              alert('Login Successfully');
              if(this.role === 1 && this.data.userRole === 1){
                alert('Login Successfully');
                this.loginForm.reset();
                sessionStorage.setItem('userDetails', JSON.stringify(this.data));
                this.router.navigate(['dealer']);
              }
              if(this.role === 0 || this.data.userRole === 0){
                alert('Login Successfully');
                this.loginForm.reset();
                sessionStorage.setItem('userDetails', JSON.stringify(this.data));
                this.router.navigate(['customer']);
              }
            }
            else{
              alert('Invalid Id Or Password');
              this.loginForm.reset();
            }
      }).catch(err=> {
        // this.errorMsg = error.message;
        // this.successMsg = "";
        alert('User Not Exist');
        console.log(err.message);
        this.loginForm.reset();
        });
      }
  }
}
