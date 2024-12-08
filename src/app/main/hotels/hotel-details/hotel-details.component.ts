import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-hotel-details',
  templateUrl: './hotel-details.component.html',
  styleUrls: ['./hotel-details.component.scss']
})
export class HotelDetailsComponent {

constructor(private activateRoute:ActivatedRoute, private http:HttpService){

  this.hotelObj.city = this.activateRoute.snapshot.queryParamMap.get('city')
  this.hotelObj.rooms = this.activateRoute.snapshot.queryParamMap.get('rooms')
  this.hotelObj.checkin = this.activateRoute.snapshot.queryParamMap.get('checkin')
  this.hotelObj.checkout = this.activateRoute.snapshot.queryParamMap.get('checkout')
}

tab1:string = ""


hotelObj:any = {
  city:"",
  rooms:"",
  checkin:null,
  checkout:null
}
hotelList:any
roughprint:any
ngOnInit(){
  console.log(this.hotelObj.city, this.hotelObj.rooms, this.hotelObj.checkin, this.hotelObj.checkout)
  this.getData()
}

sortPopular(sort:any){
  this.tab1 = sort
  this.hotelList.sort((a:any,b:any)=>b.reviewSummary.totalRatingCount - a.reviewSummary.totalRatingCount) 
}

sortHotel(sort:any){
  this.tab1 = sort
if(sort == 'rating'){
  this.hotelList.sort((a:any,b:any)=>b.reviewSummary.cumulativeRating-a.reviewSummary.cumulativeRating)
} else if (sort == 'price-highest'){
  this.hotelList.sort((a:any,b:any)=>b.priceDetail.discountedPrice-a.priceDetail.discountedPrice)
} else if (sort == 'price-lowest'){
  this.hotelList.sort((a:any,b:any)=>a.priceDetail.discountedPrice-b.priceDetail.discountedPrice)
}
}

//GET

getData(){
this.http.getDataFromServer('search-hotels',this.hotelObj).subscribe({
  next:(res:any)=>{
    if(res && res.response && res.response.personalizedSections){
this.hotelList = res.response.personalizedSections[0].hotels
// this.roughprint = res.response.personalizedSections[0].hotels
    }
    console.log("response from db:", this.hotelList, this.roughprint)
  }
})
}

}
