import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HotelAppComponent } from './pages/hotel-app/hotel-app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';

const routes: Routes = [
  {
    path: 'hotel', component: HotelAppComponent
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
