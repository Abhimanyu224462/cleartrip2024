import { HttpParams } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-hotel-booking',
  templateUrl: './hotel-booking.component.html',
  styleUrls: ['./hotel-booking.component.scss']
})
export class HotelBookingComponent {
hotelID: any;
  

constructor(private activateRoute:ActivatedRoute, private http:HttpService){
  this.hID = this.activateRoute.snapshot.queryParamMap.get('id')
  console.log(this.hID)
  this.hotelID = this.hID
}

ngOnInit(){
  this.getData() 
}

hID!:any

dbData!:any

hotelList: any;
hotelName: any;
hImage: any;


// getData(){
//   const endpoint = 'search-hotels'
//   this.http.getDataFromServerBookings(endpoint).subscribe({
//     next:(res:any)=>{
//       if(res && res.response && res.response.personalizedSections[0]){
//         this.hotelList = res.response.personalizedSections[0].hotels
//       }
//       console.log("response in hotel booking",this.hotelList)

//       for(const item of this.hotelList){
//         // console.log("item:",item)
//         if(this.hID == item.id){
//           this.hotelName = item.name
//           this.hImage = item.media[0].url
//           console.log("hotel name", this.hotelName, this.hImage)
//         }
//       } 
//     }
//   })
//   }

getData(){
  const endpoint:any = 'hotel-details'
  // let httpParams = new HttpParams()
  //                 .set("id",this.hotelID)
  this.http.getDataFromServerBookingsParams(endpoint,this.hotelID).subscribe({
    next:(res:any)=>{
      this.hotelName = res[0].name
      console.log(res)
      console.log("name of hotel:", this.hotelName)
      
    }
  })
}



}


