import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import * as XLSX from 'xlsx';

const baseUrl = 'http://localhost:3000/users';
const customerUrl = 'http://localhost:3000/customers';
const dealerUrl = 'http://localhost:3000/dealers';
const productsURL = 'http://localhost:3000/products';
const faqsURL = 'http://localhost:3000/faqs';
const notificationsURL= 'http://localhost:3000/notifications';
const termsConditionsURL= 'http://localhost:3000/terms-conditions';
const addressURL= 'http://localhost:3000/address';



@Injectable({
  providedIn: 'root'
})
export class APIService {

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<any> {
    return this.http.get(baseUrl);
  }

  getbyId(id: any): Observable<any> {
    return this.http.get(`${baseUrl}/${id}`);
  }

  getbyEmail(email: any): Observable<any> {
    return this.http.get(`${baseUrl}/email/${email}`);
  }
  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }
  updatePass(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/updatePass/${id}`, data);
  }


  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }
  getCustomers(): Observable<any> {
    return this.http.get(`${customerUrl}`);
  }
  getDealer(): Observable<any> {
    return this.http.get(`${dealerUrl}`);
  }
  inActivateUser(id,status): Observable<any> {
    return this.http.patch(`${baseUrl}/inactivate/${id}`,status);
  }
  async exportToExcel(data, filename) {
    {
    const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(data);
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, filename);
    XLSX.writeFile(wb, filename + '.xlsx');
    }
    }
    filterItems(data,searchTerm) {
      return data.data.filter(item => item.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1);
    }
    getProducts(){
      return this.http.get(productsURL);
    }

    getFaqs(){
      return this.http.get(faqsURL);
    }
    getNotifications(){
      return this.http.get(notificationsURL);
    }
    getAddress(){
      return this.http.get(addressURL);
    }
    getTermsConditions(){
      return this.http.get(termsConditionsURL);
    }
}
