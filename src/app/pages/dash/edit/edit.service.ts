import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiClientService } from '../../../services/apiClient/api-client.service';
import { ApiResponseAdm_Type, UserResponse } from '../../../types';
import { HttpResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EditService {

  constructor(
    private api: ApiClientService
  ) { }

  getUserById(id: string): Observable<HttpResponse<ApiResponseAdm_Type<UserResponse>>> {
    return this.api.getUserById(id)
  }

}
