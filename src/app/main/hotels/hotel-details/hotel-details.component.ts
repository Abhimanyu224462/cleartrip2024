import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-hotel-details',
  templateUrl: './hotel-details.component.html',
  styleUrls: ['./hotel-details.component.scss']
})
export class HotelDetailsComponent {
  copyhotelList:any = [];




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

//FILTER

getfilterCriteria(data:any) {
  console.log("filter criteria value recieved in detrails",data)
  this.filterHotels(data)
  }

 filterHotels(criteria:any){
  if(criteria.type == 'rating'){
    if(criteria.isSelected){
     this.hotelList =  this.copyhotelList.filter((el:any)=>el.reviewSummary.cumulativeRating > criteria.filterValue)
      console.log("filter hotel criteria fired",this.copyhotelList)
    } else {
      this.hotelList = this.copyhotelList
    }
    
  } else if (criteria.type == 'hotel_price_bucket'){
    
    this.hotelList = this.copyhotelList.filter((el:any)=> el.priceDetail.discountedPrice > criteria.filterRange.min && el.priceDetail.discountedPrice < criteria.filterRange.max)
    
    console.log("price criteria fired", this.hotelList)
    if(this.hotelList.length == 0){
      alert("No Record Found")
      this.hotelList = this.copyhotelList
    }
  }
 } 


//GET

getData(){
this.http.getDataFromServer('search-hotels',this.hotelObj).subscribe({
  next:(res:any)=>{
    if(res && res.response && res.response.personalizedSections){
this.hotelList = res.response.personalizedSections[0].hotels
this.copyhotelList = [...this.hotelList]
// this.roughprint = res.response.personalizedSections[0].hotels
    }
    console.log("response from db:", this.hotelList, this.roughprint)
  }
})
}

}
