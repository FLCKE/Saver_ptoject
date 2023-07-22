import { Component } from "@angular/core";
import { TransitionService } from "../shared/transitionservice/transition.service";
@Component({
    selector:'app-connexion',
    templateUrl:'./connexion.component.html',

})

export class ConnexionComponent{
    public connexionActive: boolean;
    constructor(private transitionService :TransitionService){
        this.connexionActive=transitionService.connexionStatus;
    }
    public change(): void {
        this.transitionService.inscriptionChange(!this.connexionActive)
        // this.inscriptionActive = !this.inscriptionActive;
    }
}