import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HotelsRoutingModule } from './hotels-routing.module';
import { HotelsComponent } from './hotels.component';
import { HotelSearchComponent } from './hotel-search/hotel-search.component';
import { HotelDetailsComponent } from './hotel-details/hotel-details.component';
import { HotelBookingComponent } from './hotel-booking/hotel-booking.component';
import { HotelPaymentComponent } from './hotel-payment/hotel-payment.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { HotelFilterComponent } from './hotel-filter/hotel-filter.component';



@NgModule({
  declarations: [
    HotelsComponent,
    HotelSearchComponent,
    HotelDetailsComponent,
    HotelBookingComponent,
    HotelPaymentComponent,
    HotelFilterComponent
  ],
  imports: [
    CommonModule,
    HotelsRoutingModule,
    FormsModule,
    ReactiveFormsModule,

    // BrowserAnimationsModule,
    // NoopAnimationsModule,
    BsDatepickerModule.forRoot()
    
  ],
  exports:[
    HotelBookingComponent
  ]
})
export class HotelsModule { }
