import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

@Output()
emitsignup:EventEmitter<string> = new EventEmitter

clicksignup(){
  this.emitsignup.emit('signup')
}


}
