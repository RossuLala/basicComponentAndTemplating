import { Component } from '@angular/core';
import { EventModel } from './event-model';

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
        name: 'sziget',
        pic: 'https://www.fokert.hu/wp-content/uploads/2017/08/25_eves_a_sziget_fesztival_1-1.png'
      },
      {
        id: 33,
        name: 'fezen',
        pic: 'https://www.jegyekitt.hu/img/fezen-2017-fehervari-zenei-fesztival.jpg'
      },
      {
        id: 2,
        name: 'rockmaraton',
        pic: 'https://www.programturizmus.hu/media/image/big/ajanlat/kultura/koncert-zene/rockzene/2/725-rockmaraton-fesztival.jpg'
      },
      {
        id: 7,
        name: 'oktoberfest',
        pic: 'https://www.gastronomicslc.com/wp/wp-content/uploads/2016/08/snowbird-oktoberfest.jpg'
      }
    ];
    console.log(this.events);

    const puf = this.events.reduce(( x: EventModel, y: EventModel ) => {
      //if ( x.id > y.id ) {
      //  return x;
      //}else {
      //  return y;
      //}
      return x.id > y.id ? x : y;
      // (logikai vizsgálat) ? haigaz  :hahamis;
    }).id;
    console.log('puf______',puf);
  }


  delete(id: number){
    // kiszűrjük a tömbből azt az elemet, aminek az id-je adott
    this.events = this.events.filter ((ev: EventModel) => ev.id !== id);
  }


  add(newEventNameInput: HTMLInputElement, newEventPicInput: HTMLInputElement){
    console.log( newEventNameInput.value );
                                     // (logikai vizsgálat) ? haigaz  : hahamis
    const maxId = this.events.reduce(( x, y ) => x.id > y.id ? x : y).id;

    // spread oparator [...this.events]
    this.events = [...this.events, new EventModel(maxId + 1, newEventNameInput.value, newEventPicInput.value)]

    newEventNameInput.value = '';
    newEventPicInput.value = '';
  }

}
