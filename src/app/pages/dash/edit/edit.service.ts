import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiClientService } from '../../../services/apiClient/api-client.service';
import { ApiResponseAdm_Type, UpdateUserResponse, UserResponse } from '../../../types';
import { HttpResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EditService {

  constructor(
    private api: ApiClientService
  ) { }

  GetUserById(id: string): Observable<HttpResponse<ApiResponseAdm_Type<UserResponse>>> {
    return this.api.getUserById(id)
  }

  SaveChanges(id: string, name: string, is_active: boolean, password?: string | null): Observable<HttpResponse<ApiResponseAdm_Type<UpdateUserResponse>>> {
    return this.api.UpdateUserData(id, name, is_active, password);
  }
}
