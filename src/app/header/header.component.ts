import { Component, OnInit, OnDestroy } from '@angular/core';

import { Subscription } from 'rxjs';

import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit, OnDestroy {
  constructor( private authService: AuthService ) { }

  public isCollapsed = true;
  private userSub: Subscription;
  authenticated = false;


  ngOnInit() {
    this.userSub = this.authService.user.subscribe(user => {
      this.authenticated = !!user;
    });
  }

  ngOnDestroy() {
    this.userSub.unsubscribe();
  }

  onLogout() {
    this.authService.logout();
  }
  



}