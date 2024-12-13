import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
@Output()
emitAction:EventEmitter<string> = new EventEmitter()

loadSignup(){
  this.emitAction.emit("signup")
}
}
