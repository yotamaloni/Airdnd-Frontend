import { Component, OnInit } from '@angular/core';
import { Hotel } from 'src/app/models/hotel';
import { HotelService } from 'src/app/service/hotel.service';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'hotel-app',
  templateUrl: './hotel-app.component.html',
  styleUrls: ['./hotel-app.component.scss']
})
export class HotelAppComponent implements OnInit {

  hotels: Hotel[]
  hotels$: Observable<Hotel[]>
  constructor(private HotelService: HotelService) { }

  ngOnInit(): void {
    this.HotelService.query()
    this.hotels$ = this.HotelService.hotels$
  }

}
