import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const url = "http://localhost:3000/account"
@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http: HttpClient) { }

  createAcc(data: any): Observable<any> {
    return this.http.post<any>(`${url}`, data)
  }
  login(data: any): Observable<any> {
    return this.http.get<any>(`${url}?email=${data.email}&password=${data.password}`)
  }
  getAcc():Observable<any>{
    return this.http.get<any>(`${url}`)
  }
}
