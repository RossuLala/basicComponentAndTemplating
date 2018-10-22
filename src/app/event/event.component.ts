import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {
  title = '-----ez a event title változója----';

  constructor() {
    console.log(`${this.title} itt lehet folytatni folyó szöveggel`);
    this.greetings();
  }

  greetings(){
    console.log('add nincs létrehozva');
  }

  ngOnInit() {
  }



}
