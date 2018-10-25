import { Component } from '@angular/core';
import { EventModel } from './event-model';

@Component({
  selector: 'app-listdemo',
  templateUrl: './listdemo.component.html',
  styleUrls: ['./listdemo.component.css']
})
export class ListdemoComponent {

  public events: EventModel[];
  public modifyEvent: EventModel;

  constructor() {
    this.events = [
      {
        id: 1,
        name: 'sziget ',
        pic: 'https://www.fokert.hu/wp-content/uploads/2017/08/25_eves_a_sziget_fesztival_1-1.png'
      },
      {
        id: 2,
        name: 'fezen ',
        pic: 'https://www.jegyekitt.hu/img/fezen-2017-fehervari-zenei-fesztival.jpg'
      },
      {
        id: 3,
        name: 'rockmaraton ',
        pic: 'https://www.programturizmus.hu/media/image/big/ajanlat/kultura/koncert-zene/rockzene/2/725-rockmaraton-fesztival.jpg'
      },
      {
        id: 4,
        name: 'oktoberfest ',
        pic: 'https://www.gastronomicslc.com/wp/wp-content/uploads/2016/08/snowbird-oktoberfest.jpg'
      }
    ];
    this.modifyEvent = new EventModel('');
  }


  delete(id: number) {
    // kiszűrjük a tömbből azt az elemet, aminek az id-je adott
    this.events = this.events.filter((ev: EventModel) => ev.id !== id);
  }


  save(newEventNameInput: HTMLInputElement, newEventPicInput: HTMLInputElement) {
    if (this.modifyEvent.id === 0) {
      // új felvitel id=0
      const maxId = this.events.reduce((x, y) => x.id > y.id ? x : y).id;
      this.events = [...this.events, new EventModel(newEventNameInput.value, maxId + 1, newEventPicInput.value)];
    } else {
      // edit
      this.events = this.events.map ((ev) => {
        if (ev.id === this.modifyEvent.id){
          return {
            id: ev.id,
            name: newEventNameInput.value,
            pic: newEventPicInput.value
          };
        } else {
          return ev;
        }
      });
      this.modifyEvent = new EventModel('');
    }
    newEventNameInput.value = '';
    newEventPicInput.value = '';
  }

  edit(id: number) {
    //Ha biztos, hogy van ilyen
    // Ha bizos, hogy csak egy van
    this.modifyEvent = this.events.filter((ev) => ev.id === id)[0];
  }

}
