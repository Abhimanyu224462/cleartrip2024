import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HotelsRoutingModule } from './hotels-routing.module';
import { HotelsComponent } from './hotels.component';
import { HotelSearchComponent } from './hotel-search/hotel-search.component';
import { HotelDetailsComponent } from './hotel-details/hotel-details.component';
import { HotelBookingComponent } from './hotel-booking/hotel-booking.component';
import { HotelPaymentComponent } from './hotel-payment/hotel-payment.component';


@NgModule({
  declarations: [
    HotelsComponent,
    HotelSearchComponent,
    HotelDetailsComponent,
    HotelBookingComponent,
    HotelPaymentComponent
  ],
  imports: [
    CommonModule,
    HotelsRoutingModule
  ]
})
export class HotelsModule { }
