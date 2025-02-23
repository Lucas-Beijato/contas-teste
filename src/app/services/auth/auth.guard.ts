import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './auth.service';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  const auth = inject(AuthService)
  const router = inject(Router)
  const isAuth = auth.isAuth();


  if (!isAuth) {
    router.navigate(['/login'])
    return false
  }
  return true;
};
