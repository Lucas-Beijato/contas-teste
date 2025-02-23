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

  login(id: string, password: string): Observable<string> {

    let resp: string;

    this.api.login(id, password).subscribe((res) => {

      if ('error' in res.body!) {
        switch (res.status) {
          case 400: {
            resp = 'Usuário ou senha inválidos'
            break;
          }
          case 401: {
            resp = 'Usuário ou senha inválidos'
            break;
          }
          case 500: {
            resp = 'Erro interno do servidor'
            break;
          }
          default: { resp = 'Erro desconhecido.' }
        }
        console.log(res.body.error)
      }

      if ('data' in res.body!) {
        const today = new Date()
        const tokenTime = new Date(today.getFullYear(), today.getMonth(), today.getDate(), (today.getHours() + 1), today.getMinutes(), today.getSeconds())
        this.cookies.set('contasToken', res.body.data.token, { expires: tokenTime, path: '/' });
        this.router.navigate(['/dash'])
      }
    });;

    return new Observable()
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
