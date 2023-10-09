import { Component } from "@angular/core";
import { DataapiService } from "../shared/dataapiservice/dataapi.service";
import { DomSanitizer, SafeResourceUrl } from "@angular/platform-browser";
import { AngularFireStorageReference, AngularFireUploadTask, AngularFireStorage } from "angularfire2/storage";
@Component({
    selector: 'app-upload',
    templateUrl: './upload.component.html',
})
export class UploadComponent {
    fichier: any;
    // ref: AngularFireStorageReference;
    // task: AngularFireUploadTask;
    constructor(private data: DataapiService, private saverStorage: AngularFireStorage) {};
    /**
     * uploadFile
    */
    public uploadFile() {
        let name = document.getElementById("name") as HTMLInputElement;
        let filecategory = document.getElementById("category") as HTMLSelectElement;
        let file = document.getElementById("fileUpload") as HTMLInputElement ;
        if (file && file.files){
            if (file instanceof HTMLInputElement && file.files.length > 0){
           const newFile = {
               fileName: name.value,
               fileCategory: filecategory.value,
               fileContent:file.files[0],
           }
             this.addfile(newFile.fileContent);
        }
       }
        // this.addfile(newFile.fileContent);
        console.log("btn valider");

        // this.fichier = `https://f005.backblazeb2.com/b2api/v1/b2_download_file_by_id?fileId=4_z36b0b1d33e23208d8da20a13_f1091186a09d830c2_d20230824_m163308_c005_v0501001_t0011_u01692894788922`;

        //    this.fichier = this.sanitizer.bypassSecurityTrustResourceUrl("http://localhost:3005/getdocumentbyid") ;

        // this.fichier = this.data.getfile();

    }
    public addfile(file:File ){
        var ref: AngularFireStorageReference;
        var task: AngularFireUploadTask;
        var id=Math.random().toString(36).substring(2);
        ref=this.saverStorage.ref(id);
        task=ref.put(file);
    }
}