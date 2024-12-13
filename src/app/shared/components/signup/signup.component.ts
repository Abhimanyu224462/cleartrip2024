import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {

@Output()
emitSignInAction:EventEmitter<string> = new EventEmitter()

navigateToSignIn(){
  this.emitSignInAction.emit('login')
}
}
