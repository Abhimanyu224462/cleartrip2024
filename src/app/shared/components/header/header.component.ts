import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

isSelected: any;

getAction(data:any) {
this.isSelected = data
console.log("emit login:", this.isSelected)
  }
}
