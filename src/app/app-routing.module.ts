import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HotelAppComponent } from './pages/hotel-app/hotel-app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { HotelDetailsComponent } from './pages/hotel-details/hotel-details.component';
import { HotelResolverService } from './service/hotel-resolver.service';
import { HotelSearchResolverService } from './service/hotel-search-resolver.service';

const routes: Routes = [
  {
    path: 'hotel', component: HotelAppComponent, resolve: { hotelInfo: HotelSearchResolverService }
  },
  {
    path: 'hotel/:id', component: HotelDetailsComponent, resolve: { hotel: HotelResolverService }
  },
  {
    path: '', component: HomePageComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
