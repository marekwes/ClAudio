import { Injectable } from '@angular/core';

import { AngularFireAuth } from 'angularfire2/auth';
import { auth } from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public afAuth: AngularFireAuth) {}

  doGoogleLogin() {
    return new Promise<any>( (resolve) => {
      const provider = new auth.GoogleAuthProvider();
      provider.addScope('profile');
      provider.addScope('email');
      this.afAuth.auth
      .signInWithPopup(provider)
      .then(res => {
        resolve(res);
      });
    });
  }

  doGoogleLogout() {
    this.afAuth.auth.signOut();
  }

  doEmailLogin(email: string, password: string) {
    return new Promise<any>((resolve) => {
      this.afAuth.auth
      .signInWithEmailAndPassword(email, password).then(res => {
        resolve(res);
      });
    });
  }

  createUserWithEmail(email: string, password: string) {
    return new Promise<any>((resolve) => {
      this.afAuth.auth
      .createUserWithEmailAndPassword(email,password).then(res => {
        resolve(res);
      });
    });
  }
}
