import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './/app-routing.module';
import { NotFoundComponent } from './not-found.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  imports: [
    BrowserModule, FormsModule, // imports for @angular
    AngularFireModule.initializeApp(environment.firebase), // imports firebase/app needed for everything
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    AngularFireStorageModule, // imports firebase/storage only needed for storage features
    NgbModule.forRoot(), // imports ng-bootstrap
    AppRoutingModule, 
  ],
  declarations: [ 
    AppComponent, LoginComponent, NotFoundComponent, HomeComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}
