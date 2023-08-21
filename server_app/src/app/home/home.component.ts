import { Component,OnInit } from "@angular/core";

@Component({
    selector:'app-upload',
    templateUrl:'./home.component.html',
})
export class homeComponent implements OnInit{
    public userData:any;
    /**
     * getUserData
     */
    public getUserData() {
        const data=localStorage.getItem('AuthUser');
        if(data){
            this.userData=JSON.parse(data);
        }
    }
    ngOnInit(): void {
        this.getUserData();
    }
}