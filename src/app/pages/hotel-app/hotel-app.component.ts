import { Component, Input, OnInit } from '@angular/core';
import { Hotel } from 'src/app/models/hotel';
import { HotelShortInfo } from 'src/app/models/hotel-short-info';
import { HotelService } from 'src/app/service/hotel.service';
import { Observable, Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'hotel-app',
  templateUrl: './hotel-app.component.html',
  styleUrls: ['./hotel-app.component.scss']
})
export class HotelAppComponent implements OnInit {

  // hotels: Hotel[]
  hotels$: Observable<Hotel[]>
  isInSearch: boolean = false
  constructor(private HotelService: HotelService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.HotelService.query()
    this.hotels$ = this.HotelService.hotels$
    const queryParams = this.route.snapshot.queryParams
    if (queryParams['location'] || queryParams['date'] || queryParams['guests']) this.isInSearch = true
  }

}
