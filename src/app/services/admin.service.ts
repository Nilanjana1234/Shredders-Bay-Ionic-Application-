import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';


const baseUrl = 'http://localhost:3000';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }

  getCountries(){
    return this.http.get(`${baseUrl}/findCountries`);
  }
}
