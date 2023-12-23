import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { AppUser } from '../../models/user.models';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  constructor(private _http: HttpClient) { }
  public apiUrl!: string;
  getAllData(): Observable<any> {
    this.apiUrl = 'http://localhost:3306/users';
    return this._http.get(`${this.apiUrl}`)
  }
  getUser(link: string): Observable<any> {
    console.log("lancer")
    return this._http.get(`${link}`);
  }
  // public 
  addUser(newUser: any): Observable<any> {
    this.apiUrl = 'http://localhost:3306/add-user';
    return this._http.post(this.apiUrl, newUser);
  }
  logout() {
    localStorage.removeItem("AuthUser");
  }
  /**
   * addfile
   */
  addFile(newFile: any): Observable<any> {
    this.apiUrl = 'http://localhost:3306/add-file';
    return this._http.post(this.apiUrl, newFile);
  }
  selectFile(user_id: any): Observable<any> {
    let link = 'http://localhost:3306/select-file?user_id=' + user_id;
    console.log(user_id);
    return this._http.get(link);
  }
}
