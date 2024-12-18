import { Component, EventEmitter, Output } from '@angular/core';
import { timer, interval, Subscription } from 'rxjs';


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
    this.timer()

  }

  //mobile verified and tick
  //timer 
  //validation
  //disabled button

  verifyok: boolean = true;
  verifyok1:boolean = false;

  verifyotp() {
    this.verify = this.enteredotp
console.log("verify entered", this.verify)

    if(this.verify == this.otp){
      console.log("otp for match", this.otp)
      this.verifyok = false
      this.verifyok1 = true
      // alert("otp verified successfully")
    } else {
      alert("Wrong OTP Entered")
    }

  }


ngOnInit(){
  // this.timer()
}

 timer(){
  // timer(10,1000).subscribe(n => console.log('timer', n));
  this.sub = interval(1000).subscribe(n => {
    this.interval = 10 - n 
    console.log('interval', this.interval)
    if(this.interval == 0){
      this.sub.unsubscribe()
    }
  }
);
  
 }

 interval!:number
 
 sub:Subscription = new Subscription()



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
