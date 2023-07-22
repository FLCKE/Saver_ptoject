import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root',
})
export class TransitionService {
    connexionStatus: boolean = false;
    inscriptionStatus: boolean = true;
    acceuilStatus: boolean=false;
    public connexionChange(value:boolean){
        this.connexionStatus=value;
    }
    public inscriptionChange(value:boolean){
        this.connexionStatus=value;
    }
    public acceuilChange(value:boolean){
        this.connexionStatus=value;
    }
}