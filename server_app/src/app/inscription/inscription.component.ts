import { Component } from '@angular/core';
import { TransitionService } from '../shared/transitionservice/transition.service';
import { ApiserviceService } from '../shared/backservice/apiservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
})
export class InscriptionComponent {
  title = 'server_app';
  public inscriptionActive: boolean;
  constructor(private transitionService: TransitionService, private apiservice: ApiserviceService, private router: Router) {
    this.inscriptionActive = transitionService.inscriptionStatus;
  }
  public change(): void {
    console.log("succed")
    this.transitionService.inscriptionChange(!this.inscriptionActive)
    this.inscriptionActive = !this.inscriptionActive;
  }
  /**
   * addUser
   */
  public addUser() {
    let email = document.getElementById('email') as HTMLInputElement;
    let firstname = document.getElementById('firstname') as HTMLInputElement;
    let lastname = document.getElementById('lastname') as HTMLInputElement;
    let password = document.getElementById('password') as HTMLInputElement;
    const newUserData = {
      email: email.value,
      firstname: firstname.value,
      lastname: lastname.value,
      password: password.value,

    }
    console.log(newUserData);
    this.apiservice.addUser(newUserData).subscribe({
      next: (result) => {
        this.router.navigateByUrl('/login');
      },
      error: (err) => {

      }
    })
  }
}