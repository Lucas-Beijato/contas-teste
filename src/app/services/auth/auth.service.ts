import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';
 
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private url = 'http://localhost:3000/v1/a';

  constructor(
    private http: HttpClient, 
    private cookies: CookieService,
    private router: Router,
  ) { }

  login(id: string, password: string): Observable<any> {
    return new Observable(observer => {
      this.http.post(`${this.url}/auth`, { id, password }).subscribe({
        next: (response: any) => {
          // definir tipo para o response
          // definir tempo para expirar o token
          this.cookies.set('contasToken', response.data.token, { expires: 1, path: '/' });
          observer.next(response);
          observer.complete();
        },
        error: (error) => observer.error(error)
      });
    });
  }

  logout() {
    this.cookies.delete('contasToken')
    this.router.navigate(['/login'])
  }

  isAuth(): boolean {
    const token = this.cookies.get('contasToken');
    if (token && token !== null && token !== "") {
      return true
    }
    return false
  }

}
