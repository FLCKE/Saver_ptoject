import { Component } from "@angular/core";
import { TransitionService } from "../shared/transitionservice/transition.service";
import { ApiserviceService } from "../apiservice.service";
import { AppUser } from "../models/user.models";
import { Router } from "@angular/router";

@Component({
    selector: 'app-connexion',
    templateUrl: './connexion.component.html',

})

export class ConnexionComponent {
    public connexionActive: boolean;
    public errorMessage!: string;
    public user!: AppUser;
    public userAuthentificate!: boolean;
    constructor(private transitionService: TransitionService, private apiservice: ApiserviceService, private router: Router) {
        this.connexionActive = transitionService.connexionStatus;
    }

    public change(): void {
        this.transitionService.inscriptionChange(!this.connexionActive)
        // this.inscriptionActive = !this.inscriptionActive;
    }
    public verification(): void {
        var email: HTMLInputElement | null = document.getElementById('email') as HTMLInputElement;
        var valure: string = email.value

        this.apiservice.getAllData().subscribe((res) => {
            console.log(res, "resq=>");
            for (let i = 0; i < res.data.length; i++) {
                if (res.data[i].email == valure) {
                    console.log("reussite");
                } else {
                    console.log("echec");
                }
            }
        })
    }
    public login() {
        console.log("hhhth");
        let email: HTMLInputElement = document.getElementById('email') as HTMLInputElement;
        let password: HTMLInputElement = document.getElementById('password') as HTMLInputElement;
        console.log(email.value, password.value);
        let loginUrl = "http://localhost:3306/login" + "?email=" + email.value + "&password=" + password.value;
        this.apiservice.getUser(loginUrl).subscribe({
            next: (result) => {
                console.log("succeeeeed !!! data reclaim ");
                this.user = result.data;// affecter les information recuperer a mon user 
                this.authentificateUser();// authentifier l'user et enregistrer ses informations dans le storage local
                this.router.navigateByUrl("/home");
            },
            error: (Error) => {
                console.log(Error);
            }

        });
        if (!this.userAuthentificate) {
            this.errorMessage = "Password or email incorrect";
        }

    }
    public authentificateUser() {
        this.userAuthentificate = true;
        localStorage.setItem("AuthUser", JSON.stringify({ userId:this.user.id, firstname: this.user.firstname, lastname: this.user.lastname }));
    }
}