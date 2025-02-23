import { Component, OnInit } from '@angular/core';
import { EditService } from './edit.service';
import { ActivatedRoute } from '@angular/router';
import { User_Type } from '../../../types';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-edit',
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css'
})
export class EditComponent implements OnInit {
  user: User_Type = { id: '', name: '', is_active: false }
  loadingUser: boolean = false;

  editForm = new FormGroup({
    name: new FormControl(this.user.name, [Validators.minLength(3)]),
    is_active: new FormControl(this.user.is_active)
  })

  constructor(
    private editService: EditService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.loadingUser = true;
    const id = String(this.route.snapshot.paramMap.get('id'));
    this.editService.getUserById(id).subscribe({
      next: (res) => {
        if ('error' in res.body!) {
          console.log(res.body.error)
        }

        if ('data' in res.body!) {
          this.user = res.body.data.user
        }
      },
      error: (error) => { console.log(error) },
      complete: () => {
        this.editForm.patchValue({ name: this.user.name, is_active: this.user.is_active })
        this.loadingUser = false;
      }
    })
  }
}