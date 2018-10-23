import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '---title változó';
  events = [
    'sziget',
    'efot',
    'fazeb',
    'szin'
  ];
  show = false;
  klikkeljunke = false;
  inputContent: string;

  pipeDemo = [
    {
      'id': 1,
      'name': 'Puffancs'
    },
    {
      'id': 2,
      'name': 'Lala'
    },
    {
      'id': 3,
      'name': 'Tojás'
    }
  ];

  toogle(){
    this.show = !this.show;
  }


  demo(ev: MouseEvent){
    console.log(ev.layerX);
  }
}
