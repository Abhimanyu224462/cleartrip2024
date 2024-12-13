import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HotelsComponent } from './hotels.component';
import { HotelDetailsComponent } from './hotel-details/hotel-details.component';
import { HotelBookingComponent } from './hotel-booking/hotel-booking.component';

const routes: Routes = [
  {path:'hDetails',component:HotelDetailsComponent},
  {path:'hBooking',component:HotelBookingComponent},
  { path: '', component: HotelsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HotelsRoutingModule { }
