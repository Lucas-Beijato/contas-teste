import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';
import { ApiClientService } from '../apiClient/api-client.service';
import { HttpResponse } from '@angular/common/http';
import { ApiResponseAdm_Type, TokenResponse } from '../../types';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  constructor(
    private cookies: CookieService,
    private router: Router,
    private api: ApiClientService
  ) { }

  login(id: string, password: string): Observable<HttpResponse<ApiResponseAdm_Type<TokenResponse>>> {
    return this.api.login(id, password)
  }

  async logout() {
    this.cookies.delete('contasToken', '/')
    await this.router.navigate(['/login'])
  }

  isAuth(): boolean {
    const token = this.cookies.get('contasToken');
    if (token && token !== null && token !== "") {
      return true
    }
    return false
  }

}
