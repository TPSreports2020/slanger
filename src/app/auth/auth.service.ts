import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

import { catchError, tap } from 'rxjs/operators';
import { throwError, Subject, BehaviorSubject } from 'rxjs'

import { User } from './user.model';

export interface AuthResponseData {
  kind: string;
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
  registered?: boolean;
}

@Injectable({providedIn: 'root'})
export class AuthService {
  constructor(
    private http: HttpClient,
    private router: Router
    ) { }

  user = new BehaviorSubject<User>(null);
  private tokenExpirationTimer: any;

  private handleError(errorRes: HttpErrorResponse) {
    let errorMessage = 'An unknown error occurred!';
    if (!errorRes.error || !errorRes.error.error) {
      return throwError(errorMessage);
    }
    switch (errorRes.error.error.message) {
      case 'EMAIL_EXISTS':
        errorMessage = 'This email exists already!';
        break;
      case 'EMAIL_NOT_FOUND':
        errorMessage = 'There is no account associated with that email!'
        break;
      case 'INVALID_PASSWORD':
        errorMessage = 'That password is incorrect!'
    }
    return throwError(errorMessage);
  }

   private handleAuth(email: string, userId: string, token: string, expiresIn: number) {
    const expirationDate = new Date( new Date().getTime() + expiresIn * 1000 );
    const user = new User(
      email, 
      userId, 
      token,
      expirationDate
    );
    this.user.next(user);
    //expiresIn is in seconds, * 1000 gets miliseconds
    this.autoLogout(expiresIn * 1000);
    localStorage.setItem('userData', JSON.stringify(user));
  }

  signUp(email: string, password: string) {
    return this.http.post<AuthResponseData>(
      'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAGgsWdheEECow6J9a_rri_rhVFn4DgkQA',
      {
        email: email,
        password: password,
        returnSecureToken: true
      }
    ).pipe(
      catchError(this.handleError), 
      tap(resData => {
        this.handleAuth(
          resData.email, 
          resData.localId,
          resData.idToken,
          +resData.expiresIn)
      })   
    );
  }

  login(email: string, password: string) {
    return this.http.post<AuthResponseData>(
      `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAGgsWdheEECow6J9a_rri_rhVFn4DgkQA`,
      {
        email: email,
        password: password,
        returnSecureToken: true
      }
    ).pipe(catchError(this.handleError), 
      tap(resData => {
        this.handleAuth(
          resData.email, 
          resData.localId,
          resData.idToken,
          +resData.expiresIn)
      })  
    );
  }

  autoLogin() {
    // Called in ngOnInit of app.component.ts
     const userData: {
       email: string,
       id: string, 
       _token: string,
       _tokenExpirationDate: Date
     } = JSON.parse(localStorage.getItem('userData'));

     if (!userData) {
       return;
     }

      const loadedUser = 
        new User(
          userData.email, 
          userData.id, 
          userData._token, 
          new Date(userData._tokenExpirationDate)
        );

      if (loadedUser.token) {
        this.user.next(loadedUser);
        const expirationDuration = 
          new Date(userData._tokenExpirationDate).getTime() -
          new Date().getTime();
        this.autoLogout(expirationDuration);
      }
  }

  autoLogout(expirationDuration: number) {
    console.log(expirationDuration);
    this.tokenExpirationTimer = setTimeout(() => {
      this.logout();   
    }, expirationDuration);
  }

  logout() {
    this.user.next(null);
    this.router.navigate(['/auth']);
    localStorage.removeItem('userData');
    if (this.tokenExpirationTimer) {
      clearTimeout(this.tokenExpirationTimer);
    }
    this.tokenExpirationTimer = null;

  }

}