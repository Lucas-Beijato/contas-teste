import { Component } from '@angular/core';
import { MenuComponent } from '../../components/menu/menu.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-dash',
  imports: [MenuComponent, RouterOutlet],
  templateUrl: './dash.component.html',
  styleUrl: './dash.component.css',
  providers: []
})
export class DashComponent {}
