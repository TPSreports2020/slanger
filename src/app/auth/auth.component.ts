import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { Observable } from 'rxjs';

import { AuthService, AuthResponseData } from './auth.service';

@Component({
  selector: 'auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  constructor(
    private authService: AuthService, 
    private router: Router
    ) { }

  loginMode = true;
  loading = false;
  error: string = null;

  ngOnInit() {
  }

  onHandleError() {
    this.error = null;
  }

  onSwitchMode() {
    this.loginMode = !this.loginMode;
  }

  onSubmit(form: NgForm) {
    if (!form.valid) {
      return;
    }
    const email = form.value.email;
    const password = form.value.password;

    let authObs: Observable<AuthResponseData>;
    this.loading = true;

    if (this.loginMode) {
      authObs = this.authService.login(email, password);
    } else { 
      authObs = this.authService.signUp(email, password);
    }

    authObs.subscribe(
      resData => {
      console.log(resData);
      this.loading = false;
      this.router.navigate(['account']);
      },
      errorMessage => {
      this.loading = false;
      this.error = errorMessage;
      }
    );
    form.reset();
  }

}