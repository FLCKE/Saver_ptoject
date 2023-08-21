import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { AppUser } from './models/user.models';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  constructor(private _http: HttpClient) { }
  public apiUrl!:string;
  getAllData(): Observable<any> {
    this.apiUrl = 'http://localhost:3000/users';
    return this._http.get(`${this.apiUrl}`)
  }
  getUser(link: string): Observable<any> {
    console.log("lancer")
    return this._http.get(`${link}`);
  }
  // public 
  addUser( newUser:any):Observable<any>{
    this.apiUrl = 'http://localhost:3000/add-user';
    return this._http.post(this.apiUrl,newUser);
  }
  logout(){
    localStorage.removeItem("AuthUser");
  }
}
