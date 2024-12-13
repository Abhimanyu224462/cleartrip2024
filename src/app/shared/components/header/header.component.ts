import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
selectedAct:string = "";


getAction(action:any){
this.selectedAct = action
}

}
