import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-users',
  imports: [NgFor, NgIf, RouterLink],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {
  items = [
    { id: "a", name: "a", is_active: true },
    { id: "b", name: "b", is_active: true },
    { id: "c", name: "c", is_active: false },
  ]
}
