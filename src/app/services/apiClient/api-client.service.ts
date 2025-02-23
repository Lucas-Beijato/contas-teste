import { HttpClient, HttpResponse, } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';
import { ApiResponseAdm_Type, TokenResponse, UpdateUserResponse, UserResponse, UsersListResponse } from '../../types';

@Injectable({
  providedIn: 'root'
})
export class ApiClientService {

  apiBaseUrl: string = 'http://localhost:3000/v1/a/';
  token: string;
  AuthHeader: { [header: string]: string | string[]; } = {};

  constructor(
    private http: HttpClient,
    private cookies: CookieService,
  ) {
    this.token = this.cookies.get('contasToken');
    this.AuthHeader = { 'Authorization': `Bearer ${this.token}` }
  }

  login(id: string, password: string): Observable<HttpResponse<ApiResponseAdm_Type<TokenResponse>>> {
    return this.http.post<ApiResponseAdm_Type<TokenResponse>>(`${this.apiBaseUrl}auth`, { id, password }, { observe: 'response' })
  };


  getAllUsers(): Observable<HttpResponse<ApiResponseAdm_Type<UsersListResponse>>> {
    return this.http.get<ApiResponseAdm_Type<UsersListResponse>>(this.apiBaseUrl, { headers: this.AuthHeader, observe: 'response' })
  }

  getUserById(id: string): Observable<HttpResponse<ApiResponseAdm_Type<UserResponse>>> {
    return this.http.get<ApiResponseAdm_Type<UserResponse>>(`${this.apiBaseUrl}${id}`, { headers: this.AuthHeader, observe: 'response' })
  }

  UpdateUserData(id: string, name: string, is_active: boolean, password?: string | null): Observable<HttpResponse<ApiResponseAdm_Type<UpdateUserResponse>>> {
    return this.http.put<ApiResponseAdm_Type<UpdateUserResponse>>(`${this.apiBaseUrl}`, { id, name, password, is_active }, { headers: this.AuthHeader, observe: 'response' })
  }

  CreateNewUser(id: string, name: string, password: string): Observable<HttpResponse<ApiResponseAdm_Type<UpdateUserResponse>>> {
    return this.http.post<ApiResponseAdm_Type<UpdateUserResponse>>(`${this.apiBaseUrl}`, { id, name, password }, { headers: this.AuthHeader, observe: 'response' })
  }
}
