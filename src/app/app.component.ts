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
  klikkeljunke = false;
  inputContent: string;


  toogle(){
    this.show = !this.show;
  }


  demo(ev: MouseEvent){
    console.log(ev.layerX);
  }
}
