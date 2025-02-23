import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiClientService } from '../../../services/apiClient/api-client.service';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(
    private api: ApiClientService
  ) { }

  getAllUsers(): Observable<any> {
    return this.api.getAllUsers()
  }

}
