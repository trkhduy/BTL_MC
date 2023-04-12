import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const url = 'http://localhost:3000'
@Injectable({
  providedIn: 'root'
})
export class AdService {

  constructor(private http: HttpClient) { }
  getPro(): Observable<any> {
    return this.http.get<any>(`${url}/products`)
  }
  addProduct(data:any):Observable<any>{
    return this.http.post<any>(`${url}/products`,data)
  }
  getCategory1(){
    return this.http.get<any>(`${url}/category`)
  }
  getCategory2(){
    return this.http.get<any>(`${url}/category1`)
  }
  getCategory3(){
    return this.http.get<any>(`${url}/category2`)
  }
  remove(id:number):Observable<boolean>{
    return this.http.delete<boolean>(`${url}/products/${id}`)
  }
  editProduct(id:number,data:any):Observable<any>{  
    return this.http.put<any>(`${url}/products/${id}`,data)
  }
}
