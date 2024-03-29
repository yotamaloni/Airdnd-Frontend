import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppHeaderComponent } from './cpms/app-header/app-header.component';
import { HotelAppComponent } from './pages/hotel-app/hotel-app.component';
import { AppSubHeaderComponent } from './cpms/app-sub-header/app-sub-header.component';
import { MatIconModule } from '@angular/material/icon';
import { SearchHotelComponent } from './cpms/search-hotel/search-hotel.component';
import { UserConfigComponent } from './cpms/user-config/user-config.component';
import { UserIconComponent } from './cpms/user-icon/user-icon.component';
import { HotelsOptionsListComponent } from './cpms/hotels-options-list/hotels-options-list.component';
import { HotelOptionPreviewComponent } from './cpms/hotel-option-preview/hotel-option-preview.component';
import { HotelListComponent } from './cpms/hotel-list/hotel-list.component';
import { HotelPreviewComponent } from './cpms/hotel-preview/hotel-preview.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ScrollArrowComponent } from './cpms/scroll-arrow/scroll-arrow.component';
import { HotelDetailsComponent } from './pages/hotel-details/hotel-details.component';
import { HotelDetailsHeaderComponent } from './cpms/hotel-details-header/hotel-details-header.component';
import { HotelImgPreComponent } from './cpms/hotel-img-pre/hotel-img-pre.component';
import { SearchHotelExpandedComponent } from './cpms/search-hotel-expanded/search-hotel-expanded.component';
import { DynamicModalComponent } from './cpms/modal/dynamic-modal/dynamic-modal.component';
import { DateModalComponent } from './cpms/modal/date-modal/date-modal.component';
import { LocationModalComponent } from './cpms/modal/location-modal/location-modal.component';
import { GuestModalComponent } from './cpms/modal/guest-modal/guest-modal.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    HotelAppComponent,
    AppSubHeaderComponent,
    SearchHotelComponent,
    UserConfigComponent,
    UserIconComponent,
    HotelsOptionsListComponent,
    HotelOptionPreviewComponent,
    HotelListComponent,
    HotelPreviewComponent,
    HomePageComponent,
    ScrollArrowComponent,
    HotelDetailsComponent,
    HotelDetailsHeaderComponent,
    HotelImgPreComponent,
    SearchHotelExpandedComponent,
    DynamicModalComponent,
    DateModalComponent,
    LocationModalComponent,
    GuestModalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
