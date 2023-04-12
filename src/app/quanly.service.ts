import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Cart } from './class/cart';
const url = 'http://localhost:3000'
@Injectable({
  providedIn: 'root'
})
export class QuanlyService {
  lengthCart = new Subject<number>()
  constructor(private http: HttpClient) { }
  getAll(): Observable<any> {
    this.getCart().subscribe(data => {
      this.lengthCart.next(data.length)
    })
    return this.http.get<any>(`${url}/products`)
  }
  getCate(): Observable<any> {
    return this.http.get<any>(`${url}/category`)
  }
  getCategory(id: any): Observable<any> {
    return this.http.get<any>(`${url}/category/${id}`)
  }
  getPro(id_cate: number): Observable<any> {
    return this.http.get<any>(`${url}/products?id_category=${id_cate}`)
  }
  getCate1(): Observable<any> {
    return this.http.get<any>(`${url}/category1`)
  }
  getCate2(): Observable<any> {
    return this.http.get<any>(`${url}/category2`)
  }
  getProGender(id: number): Observable<any> {
    return this.http.get<any>(`${url}/products?id_gender=${id}`)
  }
  getProPlayer(id: number): Observable<any> {
    return this.http.get<any>(`${url}/products?id_player=${id}`)
  }
  getDetail(id: number): Observable<any> {
    return this.http.get<any>(`${url}/products/${id}`)
  }
  //cart
  getCart(): Observable<any> {
    this.http.get<Cart[]>(`${url}/cart`).subscribe(data => {
      this.lengthCart.next(data.length)  
    })
    return this.http.get<any>(`${url}/cart`)
  }
  postCart(data: Cart): Observable<Cart> {
    this.getCart().subscribe(data => {
      this.lengthCart.next(data.length)
    })
    return this.http.post<Cart>(`${url}/cart`, data)
  }
  putCart(data: Cart): Observable<Cart> {
    return this.http.put<Cart>(`${url}/cart/${data.id}`, data)
  }
  getProCart(): Observable<any> {
    return this.http.get<any>(`${url}/cart`)
  }
  removeCart(id: number): Observable<any> {
    this.getCart().subscribe(data => {
      this.lengthCart.next(data.length)
    })
    return this.http.delete<any>(`${url}/cart/${id}`)
  }
  //Homepage
  getProduct1(): Observable<any> {
    return this.http.get<any>(`${url}/products/1`)
  }
  getProduct2(): Observable<any> {
    return this.http.get<any>(`${url}/products/29`)
  }
  getProduct3(): Observable<any> {
    return this.http.get<any>(`${url}/products/13`)
  }
}
