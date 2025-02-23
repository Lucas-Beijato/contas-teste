import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ApiClientService } from '../../../services/apiClient/api-client.service';

@Component({
  selector: 'app-new-user',
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './new-user.component.html',
  styleUrl: './new-user.component.css'
})
export class NewUserComponent {
  newUserForm = new FormGroup({
    id: new FormControl('', [Validators.required]),
    name: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  })

  constructor(private api: ApiClientService) { }

  CreateNewUser() {
    if (this.newUserForm.valid) {
      if (this.newUserForm.value.id && this.newUserForm.value.name && this.newUserForm.value.password) {
        this.api.CreateNewUser(this.newUserForm.value.id, this.newUserForm.value.name, this.newUserForm.value.password).subscribe({
          next: (data) => { console.log(data) },
          error: (error) => { console.log(error) },
        })
      }
    }
  }
}
