import { Component, EventEmitter, Output } from '@angular/core';
import { provideClientHydration } from '@angular/platform-browser';

@Component({
  selector: 'app-hotel-filter',
  templateUrl: './hotel-filter.component.html',
  styleUrls: ['./hotel-filter.component.scss']
})
export class HotelFilterComponent {
filterObj:any

@Output()
emitFilterObj:EventEmitter<any> = new EventEmitter();



emitData(filterCriteria:any){
  this.emitFilterObj.emit(filterCriteria)
}

ngOnInit(){
  this.filterObj = {
    rating:[
      {type:"rating",
        filterValue:4,
        isRangeFilter:false,
        filterRange:null,
        isSelected:false
      },
      {type:"rating",
        filterValue:3,
        isRangeFilter:false,
        filterRange:null,
        isSelected:false
      },
      {type:"rating",
        filterValue:2,
        isRangeFilter:false,
        filterRange:null,
        isSelected:false
      }
    ],
    price:[
      {
        type:"hotel_price_bucket",
        filterValue:null,
        isRangeFilter:false,
        filterRange:{
          min:0,
          max:2000
        }
      },
      {
        type:"hotel_price_bucket",
        filterValue:null,
        isRangeFilter:false,
        filterRange:{
          min:2000,
          max:4000
        }
      },
      {
        type:"hotel_price_bucket",
        filterValue:null,
        isRangeFilter:false,
        filterRange:{
          min:4000,
          max:40000
        }
      }
    ]

    
  }
}





}
