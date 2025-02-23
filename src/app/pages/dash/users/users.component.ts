import { NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ApiClientService } from '../../../services/apiClient/api-client.service';
import { User_Type } from '../../../types';

@Component({
  selector: 'app-users',
  imports: [NgFor, NgIf, RouterLink],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent implements OnInit {

  userList: Array<User_Type> = [];
  loading: boolean = false;

  constructor(
    private api: ApiClientService
  ) { }

  ngOnInit(): void {
    this.loading = true
    this.api.getAllUsers().subscribe({
      next: (res) => {
        if ('error' in res.body!) {
          console.log(res.body.error)
        }

        if ('data' in res.body!) {
          this.userList = res.body.data.users
        }
      },
      error: (error) => { console.log(error) },
      complete: () => {
        this.loading = false;
      }
    })
  }
}
