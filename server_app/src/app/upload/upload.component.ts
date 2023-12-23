import { Component } from "@angular/core";
import { DataapiService } from "../shared/dataapiservice/dataapi.service";
import { DomSanitizer, SafeResourceUrl } from "@angular/platform-browser";
import { initializeApp } from 'firebase/app';
import { getStorage, ref, uploadBytes } from 'firebase/storage';
import { FirebaseDataService } from "../shared/firebase/firebase-data.service";
import { ApiserviceService } from "../shared/backservice/apiservice.service";
import { Router } from "@angular/router";


// import { AngularFireStorageReference, AngularFireUploadTask, AngularFireStorage } from "angularfire2/storage";
@Component({
    selector: 'app-upload',
    templateUrl: './upload.component.html',
})
export class UploadComponent {
    fichier: any;
    constructor(private dbApi: ApiserviceService, private fireBase: FirebaseDataService, private router: Router) { };
    /**
     * uploadFile
    */
    public uploadFile() {
        let name = document.getElementById("name") as HTMLInputElement;
        let filecategory = document.getElementById("category") as HTMLSelectElement;
        let file = document.getElementById("fileUpload") as HTMLInputElement;
        if (file && file.files) {
            if (file instanceof HTMLInputElement && file.files.length > 0) {
                var fileContent = file.files[0];
                const newFile = {
                    fileName: name.value,
                    fileCategory: filecategory.value,
                    filePath: 'null',
                    userId: 0,
                }
                newFile.filePath = this.fireBase.Addfile(fileContent, newFile.fileName);
                var data = localStorage.getItem('AuthUser');
                if (data) {
                    var userData = JSON.parse(data);
                    newFile.userId = userData.userId;

                }
                this.dbApi.addFile(newFile).subscribe({
                    next: (result) => {
                        this.router.navigateByUrl("/files");
                    }
                });
                console.log(newFile);
            }
        }

    }

}