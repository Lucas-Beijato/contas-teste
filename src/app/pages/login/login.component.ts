import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth/auth.service';
import { NgClass, NgIf } from '@angular/common';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, NgIf, NgClass],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  successMes: string | null = null;
  errorMes: string | null = null;
  loading: boolean = false;

  loginForm = new FormGroup({
    id: new FormControl('', [Validators.required, Validators.minLength(3)]),
    password: new FormControl('', [Validators.required, Validators.minLength(3)]),
  });

  constructor (private auth: AuthService) {}

  onSubmit() {
    if (this.loginForm.value.id && this.loginForm.value.password) {
      this.loading = true;
      this.auth.login(this.loginForm.value.id, this.loginForm.value.password).subscribe({
        next: () => {},
        error: (error) => { this.loading = false, this.errorMes = "Erro interno no processo de login", console.log(error) },
        complete: () => { this.loading = false }
      })
    }
  }
  
}
