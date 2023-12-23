import { Injectable } from '@angular/core';
import { initializeApp } from 'firebase/app';
import { getDownloadURL, getStorage, ref, uploadBytes } from 'firebase/storage';
@Injectable({
  providedIn: 'root'
})
export class FirebaseDataService {
  firebaseconf = {
    apiKey: "AIzaSyAuCJLoKxAeDkm77LCbC9yfauz61YWS58c",
    authDomain: "saver-576fc.firebaseapp.com",
    projectId: "saver-576fc",
    storageBucket: "saver-576fc.appspot.com",
  };
  app = initializeApp(this.firebaseconf);
  storage = getStorage(this.app);
  constructor() { }
  public Addfile(fileselect: File, name: string) {

    const storageRef = ref(this.storage, "monpdf/" + name);

    // 'file' comes from the Blob or File API
    uploadBytes(storageRef, fileselect).then((snapshot) => {
      console.log('Uploaded a blob or file!');
    });
    return storageRef.fullPath;

  }
  public recup_file(fileName:string){
    return getDownloadURL(ref(this.storage,fileName));
  }
}

