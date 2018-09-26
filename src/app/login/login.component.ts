import { Component, OnInit } from '@angular/core';

import { AngularFireAuth } from 'angularfire2/auth';

import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  showSpinner = false;

  constructor(private authService: AuthService, private afAuth: AngularFireAuth) { }

  ngOnInit() {
  }

  loginWithEmail(email: string, password: string) {
    this.authService.createUserWithEmail(email, password);
  }
  loginWithGoogle() {
    this.authService.doGoogleLogin();
  }
  logout() {
    this.authService.doGoogleLogout();
  }

}
