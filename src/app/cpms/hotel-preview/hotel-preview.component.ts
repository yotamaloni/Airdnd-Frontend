import { Component, Input, OnInit } from '@angular/core';
import { Hotel } from 'src/app/models/hotel';
import { HotelShortInfo } from 'src/app/models/hotel-short-info';
@Component({
  selector: 'hotel-preview',
  templateUrl: './hotel-preview.component.html',
  styleUrls: ['./hotel-preview.component.scss']
})
export class HotelPreviewComponent implements OnInit {
  @Input() hotel: Hotel
  @Input() isInSearch: boolean
  @Input() hotelInfo: HotelShortInfo
  constructor() { }

  ngOnInit(): void {
    const hotel = this.hotel
    if (!this.isInSearch) {
      this.hotelInfo = {
        header: `${this.hotel.city}, ${hotel.country}`,
        mainFirst: hotel.name,
        mainSecond: {
          checkIntDate: hotel.saleDates.checkIn,
          checkOutDate: hotel.saleDates.checkOut
        },
        price: hotel.priceUsDollar
      }
    } else {
      this.hotelInfo = {
        header: `${hotel.name}`,
        mainFirst: `${hotel.facilities.beds} beds`,
        price: hotel.priceUsDollar
      }
    }
  }

}
