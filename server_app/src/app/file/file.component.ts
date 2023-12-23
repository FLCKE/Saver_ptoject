import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../shared/backservice/apiservice.service';
import { FileUser } from '../models/file.models';
import { FirebaseDataService } from '../shared/firebase/firebase-data.service';
@Component({
  selector: 'app-file',
  templateUrl: './file.component.html',
  styleUrls: ['./file.component.css']
})
export class FileComponent implements OnInit {
  files: FileUser[];
  constructor(private api: ApiserviceService, private fileApi: FirebaseDataService) {
    this.files = [];
  }

  ngOnInit(): void {
    console.log("eerrtrtttg");
    this.print_all_files();
  }

  public print_all_files() {
    let userId = JSON.parse(localStorage.getItem('AuthUser')!).userId;
    this.api.selectFile(userId).subscribe({
      next: (result) => {
        this.files = result.data;
        console.log(this.files[3]);
      }
    })

  }
  public display_file(filePath: string) {
    console.log(filePath);
    this.fileApi.recup_file(filePath).then((url) => {
      window.open(url, "Document");
    }).catch((error) => {
      console.log(error);
    })
  }

}