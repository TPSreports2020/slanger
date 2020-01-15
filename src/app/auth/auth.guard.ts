import { 
  CanActivate, 
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
  UrlTree
   } from '@angular/router';
import { Injectable } from '@angular/core'

import { Observable } from 'rxjs';
import { map, tap, take } from 'rxjs/operators';

import { AuthService } from './auth.service';

@Injectable({providedIn: 'root'})

export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    router: RouterStateSnapshot
  ) : 
      | boolean 
      | UrlTree
      | Promise<boolean | UrlTree> 
      | Observable<boolean | UrlTree> 
      {

    return this.authService.user.pipe(
      // Unsubscribe after getting the first instance of user subject/observable to prevent unexpected behavior
      take(1),
      map(user => {
          // Old method before UrlTree solution was developed. 
        // If no user value is true and then flipped to say canActivate is false...
        // return !!user; 
        const isAuth = !!user;
        if (isAuth) {
          return true;
        }
        return this.router.createUrlTree(['/auth']);
      })
        // Old method before UrlTree solution was developed. "In certain edge cases this can lead to race conditions with multiple redirects that interfere with eachother."
      // tap(isAuth => {
      //   if (!isAuth) {
      //     this.router.navigate(['/auth']);
      //   }
      // })
    );
  }
}