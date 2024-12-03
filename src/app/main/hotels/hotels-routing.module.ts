import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HotelsComponent } from './hotels.component';
import { HotelDetailsComponent } from './hotel-details/hotel-details.component';

const routes: Routes = [
  {path:'hDetails',component:HotelDetailsComponent},
  { path: '', component: HotelsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HotelsRoutingModule { }
