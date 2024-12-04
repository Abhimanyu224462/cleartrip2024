import { Component } from '@angular/core';

@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.scss']
})
export class HotelsComponent {

  //DECLARATION

  city: string = "";
  rooms: string = ""
  datePicker: any
  checkin: any
  checkout: any
  constructor() {

  }
  roomsType: string[] = ["1 room, 2 adult", "2 room, 4 adult", "1 room, 1 adult"]

  room(item: any) {
    this.rooms = item
  }

  dateSelect() {
    if (this.datePicker && this.datePicker.length == 2) {
      this.checkin = this.datePicker[0]
      this.checkout = this.datePicker[1]
    }
  }

  search() {
    console.log(this.roomsType)
    console.log(this.city)
    console.log(this.rooms)
    console.log(this.checkin)
    console.log(this.checkout)
  }




}
