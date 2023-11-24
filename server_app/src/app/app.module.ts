import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { UploadComponent } from './upload/upload.component';
import { homeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ApiserviceService } from './apiservice.service';
import { DataapiService } from './shared/dataapiservice/dataapi.service';
import { FirebaseDataService } from './shared/firebase-data.service';
import { FileComponent } from './file/file.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// import { AppRoutingModule } from './app.routerModule';
@NgModule({
  declarations: [
    AppComponent,
    InscriptionComponent,
    ConnexionComponent,
    homeComponent,
    UploadComponent,
    FileComponent,
    // PdfviewerComponent,
  ],
  imports: [
    RouterModule.forRoot([
      { path: 'home', component: homeComponent },
      { path: 'login', component: ConnexionComponent },
      { path: 'subcribe', component: InscriptionComponent },
      { path: 'upload', component: UploadComponent },
      { path: 'files', component: FileComponent },
      { path: '', redirectTo: 'home', pathMatch: 'full' },
    ]),
    // AppRoutingModule,
    BrowserModule,
    // NgxExtendedPdfViewerModule,
    // AngularFireModule.initializeApp({
    //   apiKey: "AIzaSyAuCJLoKxAeDkm77LCbC9yfauz61YWS58c",
    //   authDomain: "saver-576fc.firebaseapp.com",
    //   projectId: "saver-576fc",
    //   storageBucket: "saver-576fc.appspot.com",
    // }),
    HttpClientModule,
    NgbModule,
    // AngularFireStorageModule,
  ],
  providers: [ApiserviceService, DataapiService, FirebaseDataService],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
