import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  afAuth: AngularFireAuth;
  user: firebase.User;
  constructor(afAuth: AngularFireAuth) {
    this.afAuth = afAuth;
    this.afAuth.authState.subscribe(x => this.user = x);
  }

  ngOnInit() {
  }

  login() {
    var provider = new firebase.auth.GoogleAuthProvider();
    this.afAuth.auth.signInWithRedirect(provider);
  }
  logout() {
    this.afAuth.auth.signOut();
  }

}
