import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

const baseUrl = 'http://localhost:3000/users';
const customerURL = 'http://localhost:3000/customers';
const dealerURL = 'http://localhost:3000/dealers';
const productsURL = 'http://localhost:3000/products';

@Injectable({
  providedIn: 'root'
})
export class APIService {

  constructor(private http: HttpClient) { }

  getAll(){
    return this.http.get(baseUrl);
  }

  getProducts(){
    return this.http.get(productsURL);
  }

  getbyId(id: any){
    return this.http.get(`${baseUrl}/${id}`);
  }

  getbyEmail(email: any){
    return this.http.get(`${baseUrl}/email/${email}`);
  }

  getCustomers(){
    return this.http.get(`${customerURL}`);
  }

  getDealers(){
    return this.http.get(`${dealerURL}`);
  }

  create(data: any){
    return this.http.post(baseUrl, data);
  }

  update(id: any, data: any){
    return this.http.patch(`${baseUrl}/${id}`, data);
  }

  status(id: any, status: any){
    return this.http.patch(`${baseUrl}/status/${id}`, status);
  }

  delete(id: any){
    return this.http.delete(`${baseUrl}/${id}`);
  }

}
