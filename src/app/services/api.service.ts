import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  postProd(data: any) {
    return this.http.post<any>("http://localhost:3000/products/", data);
  }

  getProduct() {
    return this.http.get<any>("http://localhost:3000/products/");
  }

  putProd(data: any, id: number) {
    return this.http.put<any>("http://localhost:3000/products/" + id, data);
  }

  deleteProd(id: number) {
    return this.http.delete<any>("http://localhost:3000/products/" + id);
  }

}
