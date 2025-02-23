import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { DashComponent } from './pages/dash/dash.component';
import { UsersComponent } from './pages/dash/users/users.component';
import { EditComponent } from './pages/dash/edit/edit.component';
import { authGuard } from './services/auth/auth.guard';
import { loginGuard } from './pages/login/login.guard';
import { NewUserComponent } from './pages/dash/new-user/new-user.component';

export const routes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent, canActivate: [loginGuard] },
    {
        path: 'dash', component: DashComponent, canActivate: [authGuard],
        children: [
            { path: '', redirectTo: 'users', pathMatch: 'full' },
            { path: 'users', component: UsersComponent },
            { path: 'edit/:id', component: EditComponent },
            { path: 'new-user', component: NewUserComponent }
        ]
    }
];
