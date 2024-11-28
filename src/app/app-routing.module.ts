import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'hotels', loadChildren: () => import('./main/hotels/hotels.module').then(m => m.HotelsModule) }, { path: 'flights', loadChildren: () => import('./main/flights/flights.module').then(m => m.FlightsModule) }, { path: 'cars', loadChildren: () => import('./main/cars/cars.module').then(m => m.CarsModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
