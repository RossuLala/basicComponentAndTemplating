export class EventModel {
  id: number;
  name: string;
  pic?: string;

  constructor( id, name, pic = '' ) {
    //
    this.id = id;
    this.name = name;
    this.pic = pic;
  }
}
