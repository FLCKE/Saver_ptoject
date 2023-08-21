import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'server_app';
   public data:any;
  constructor (){}
  /**
   * logout
   */
  public logout() {
    localStorage.removeItem("AuthUser");
  }
  public getUserData() {
     this.data = localStorage.getItem("AuthUser");
  }
  ngOnInit(): void {
      this.getUserData();
  }
}
