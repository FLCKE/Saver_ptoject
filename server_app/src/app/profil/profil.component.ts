import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../shared/backservice/apiservice.service';
import { AppUser } from '../models/user.models';
import { values } from 'pdf-lib';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {
  public userData: any;
  constructor(private api: ApiserviceService) { }
  /**
   * getUserData
   */
  public getUserData() {
    const data = localStorage.getItem('AuthUser');
    if (data) {
      var userData_temp = JSON.parse(data).userId;
      this.api.getUserById("http://localhost:3306/user-by-id?userId=" + userData_temp).subscribe(
        {
          next: value => this.userData = value.data,
          error: (err => console.log(err))
        }
      )
      if (this.userData) {
        console.log(this.userData);
      }

    }
  }
  ngOnInit(): void {
    this.getUserData();
  }
}
