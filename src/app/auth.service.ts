import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';
import { BehaviorSubject } from 'rxjs';
import { User } from './models/user';
import { Router } from '@angular/router';
import { SsrCookieService } from 'ngx-cookie-service-ssr';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  user$: BehaviorSubject<User | null> = new BehaviorSubject<User | null>(
    this.getUserFromCookie()
  );
  constructor(
    private auth: AngularFireAuth,
    private router: Router,
    private cookieService: SsrCookieService
  ) {}

  getUserFromCookie() {
    console.log('inside getUserFromCookie');
    const userDataOnCookie = this.cookieService.get('user');
    if (userDataOnCookie) {
      console.log('user found on cookie');
      return JSON.parse(userDataOnCookie);
    }
    return null;
  }

  initialise() {
    this.auth.onAuthStateChanged((user) => {
      if (user) {
        this.cookieService.set('user', JSON.stringify(user));
      } else {
        this.cookieService.delete('user');
      }

      this.user$.next(user);
    });
  }

  async signInWithGoogle() {
    try {
      await this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
      this.router.navigateByUrl('/');
    } catch (e) {
      console.log(e);
    }
  }

  async signInWithEmailPassword(email: string, password: string) {
    try {
      await this.auth.signInWithEmailAndPassword(email, password);
      this.router.navigateByUrl('/');
    } catch (e) {
      console.log(e);
    }
  }

  async signUpWithEmailPassword(email: string, password: string) {
    try {
      await this.auth.createUserWithEmailAndPassword(email, password);
      this.router.navigateByUrl('/');
    } catch (e) {
      console.log(e);
    }
  }

  async signout() {
    try {
      await this.auth.signOut();
      this.router.navigateByUrl('/login');
    } catch (e) {
      console.log(e);
    }
  }
}
