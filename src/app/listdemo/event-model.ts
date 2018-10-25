export class EventModel {
  id: number;
  name: string;
  pic?: string;

  constructor(name, id: number = 0, pic: string = '') {
    //
    this.id = id;
    this.name = name;
    this.pic = pic;
  }
}
