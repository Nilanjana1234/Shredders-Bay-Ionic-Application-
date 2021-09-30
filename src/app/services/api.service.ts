import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

const baseUrl = 'http://localhost:3000';

@Injectable({
  providedIn: 'root'
})
export class APIService {

  constructor(private http: HttpClient) { }

  getAll(){
    return this.http.get(`${baseUrl}/users`);
  }

  getProducts(){
    return this.http.get(`${baseUrl}/products`);
  }

  getbyId(id: any){
    return this.http.get(`${baseUrl}/${id}`);
  }

  getProductByPID(id: any){
    return this.http.get(`${baseUrl}/getOneProduct/${id}`);
  }

  getbyEmail(email: any){
    return this.http.get(`${baseUrl}/users/email/${email}`);
  }

  getCustomers(){
    return this.http.get(`${baseUrl}/customers`);
  }

  getDealers(){
    return this.http.get(`${baseUrl}/dealers`);
  }

  create(data: any){
    return this.http.post(`${baseUrl}/users`, data);
  }



  update(id: any, data: any){
    return this.http.patch(`${baseUrl}/users/${id}`, data);
  }

  status(id: any, status: any){
    return this.http.patch(`${baseUrl}/users/status/${id}`, status);
  }

  delete(id: any){
    return this.http.delete(`${baseUrl}/users/${id}`);
  }



  createCart(data: any){
    //console.log(data);
     return this.http.post(`${baseUrl}/createCart`, data);
   }

   getCartById(id: any){
     return this.http.get(`${baseUrl}/getCartById/${id}`);
   }

   deleteItem(id: any){
    return this.http.delete(`${baseUrl}/removeItem/${id}`);
  }

  createOrder(data: any){
    //console.log(data);
     return this.http.post(`${baseUrl}/createOrder`, data);
   }

   getOrders(id: any){
    return this.http.get(`${baseUrl}/getOrders/${id}`);
  }
}
