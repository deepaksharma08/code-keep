import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild {
  constructor(private authService: AuthService,
    private router: Router) {

  }
  canActivate(): boolean {
    return this.checkAuth();
  }
  canActivateChild(): boolean {
    return this.checkAuth();
  }

  private checkAuth(): boolean {
    if (this.authService.isAuthenticUser()) {
      return true;
    } else {
      this.router.navigateByUrl('login');
      return false
    }
  }

}
