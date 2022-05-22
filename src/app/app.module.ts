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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
