import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { HotelFilter } from 'src/app/models/hotel-filter';
import { HotelService } from 'src/app/service/hotel.service';

@Component({
  selector: 'hotel-filter',
  templateUrl: './hotel-filter.component.html',
  styleUrls: ['./hotel-filter.component.scss']
})
export class HotelFilterComponent implements OnInit,OnDestroy {

  hotelFilter: HotelFilter
  subscription: Subscription
  constructor(private hotelService: HotelService) { }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    
  }

}
