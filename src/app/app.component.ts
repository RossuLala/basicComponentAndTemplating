import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '---basicComponentAndTemplating';
  events = [
    'sziget',
    'efot',
    'fazeb',
    'szin'
  ];
  show = false;
}
