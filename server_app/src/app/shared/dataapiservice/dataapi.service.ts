import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataapiService {

  constructor(
    private http:HttpClient
  ) { }
  // getfile pour récupérer le fichier 
  getfile():Observable<any>{
    let urlget = `http://localhost:3005/getdocumentbyid`;
    return this.http.get(`${urlget}`);
    // let appkey ="K0050kK9zUNLvI6O8LTjHtXOkwnL1m0";
    // return new Observable(()=>{
    //   const headers = new HttpHeaders({
    //     Authorization: `Bearer ${appkey}`,
    //   });
    //   let url = `https://f005.backblazeb2.com/b2api/b2api/v1/b2_download_file_by_id?fileId=4_z36b0b1d33e23208d8da20a13_f1091186a09d830c2_d20230824_m163308_c005_v0501001_t0011_u01692894788922`;
    //   let authentificateAPi = this.http.get(url,{headers}).subscribe({
    //     next(value) {
    //         console.log(value);
    //     },
    //     error(err) {
    //         console.log(err);
    //     },
    //   });
    //   console.log(authentificateAPi);
      
      // this.http.get("https://s3.us-east-005.backblazeb2.com/b2api/v1/b2_download_file_by_id?fileId=" +"4_z36b0b1d33e23208d8da20a13_f1091186a09d830c2_d20230824_m163308_c005_v0501001_t0011_u01692894788922",{withCredentials:true}).subscribe({
      //   next(value) {
      //       console.log(value);
      //   },
      //   error(err) {
      //       console.log(err);
      //   },
      // });
    // });

  }
  // addFile pour ajouter un fichier
  // addfile(new_file::; :):any{

  // }
}
