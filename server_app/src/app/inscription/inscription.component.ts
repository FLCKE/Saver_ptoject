import { Component } from '@angular/core';
import { TransitionService } from '../shared/transitionservice/transition.service';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
})
export class InscriptionComponent {
  title = 'server_app';
  public inscriptionActive: boolean;
  constructor(private transitionService: TransitionService) {
    this.inscriptionActive = transitionService.inscriptionStatus;
  }
  public change(): void {
    console.log("succed")
    this.transitionService.inscriptionChange(!this.inscriptionActive)
    this.inscriptionActive = !this.inscriptionActive;
  }
}