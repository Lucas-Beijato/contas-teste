import { Component } from '@angular/core';
import { MenuComponent } from '../../components/menu/menu.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-dash',
  imports: [MenuComponent, RouterOutlet],
  templateUrl: './dash.component.html',
  providers: []
})
export class DashComponent { }
