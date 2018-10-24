import { Component } from '@angular/core';

export class EventModel {
  id:number;
  name: string;
}

@Component({
  selector: 'app-listdemo',
  templateUrl: './listdemo.component.html',
  styleUrls: ['./listdemo.component.css']
})
export class ListdemoComponent {

  public events: EventModel[];

  constructor() {
    this.events = [
      {
        id: 1,
        name: 'sziget'
      },
      {
        id: 2,
        name: 'fazen'
      },
      {
        id: 3,
        name: 'rockmaraton'
      },
      {
        id: 4,
        name: 'oktoberfest'
      }
    ];
    console.log(this.events);
  }

  delete(id: number){
    // kiszűrjük a tömbből azt az elemet, aminek az id-je adott
    this.events = this.events.filter ((ev: EventModel) => ev.id !== id);
  }

}
