import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { UploadComponent } from './upload/upload.component';
import { homeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ApiserviceService } from './shared/backservice/apiservice.service';
import { DataapiService } from './shared/dataapiservice/dataapi.service';
import { FirebaseDataService } from './shared/firebase/firebase-data.service';
import { FileComponent } from './file/file.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProfilComponent } from './profil/profil.component';
import { ChargerouteGuard } from './shared/guardroute/chargeroute.guard';
// import { AppRoutingModule } from './app.routerModule';
@NgModule({
  declarations: [
    AppComponent,
    InscriptionComponent,
    ConnexionComponent,
    homeComponent,
    UploadComponent,
    FileComponent,
    ProfilComponent,
    // PdfviewerComponent,
  ],
  imports: [
    RouterModule.forRoot([
      { path: 'home', component: homeComponent },
      { path: 'login', component: ConnexionComponent },
      { path: 'subcribe', component: InscriptionComponent },
      { path: 'upload', component: UploadComponent, canActivate: [ChargerouteGuard] },
      { path: 'files', component: FileComponent, canActivate: [ChargerouteGuard] },
      { path: 'profil', component: ProfilComponent, canActivate: [ChargerouteGuard] },
      { path: '', redirectTo: 'home', pathMatch: 'full' },
    ]),
    BrowserModule,
    HttpClientModule,
    NgbModule,
  ],
  providers: [ApiserviceService, DataapiService, FirebaseDataService],
  bootstrap: [AppComponent],

})
export class AppModule { }
