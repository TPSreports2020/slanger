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
  loginMode = true;
  loading = false;
  error: string = null;

  constructor() { }

  ngOnInit() {
  }

  onSwitchMode() {
    this.loginMode = !this.loginMode;
  }

}