import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {

  otp!:any
  verify!:any
enteredotp!: any;
  enteredotp1: any;

  getotp() {

    this.otp = Math.floor(1000 + Math.random() * 9000);
    console.log("OTP Recieved:", this.otp)
    alert(this.otp)

  }

  //mobile verified and tick
  //timer
  //validation
  //disabled button

  verifyotp() {
    this.verify = this.enteredotp
console.log("verify entered", this.verify)

    if(this.verify == this.otp){
      console.log("otp for match", this.otp)
      alert("otp verified successfully")
    } else {
      alert("Wrong OTP Entered")
    }

  }





@Output()
emitlogin:EventEmitter<string> = new EventEmitter()
otpmatched:boolean = false
getotpclicked:boolean = true;

clicklogin() {
this.emitlogin.emit('login')
  }

  toggleotp() {
    this.otpmatched = true
    this.getotpclicked = false
    }

}
