import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Hotel } from 'src/app/models/hotel';
import { HotelService } from 'src/app/service/hotel.service';

@Component({
  selector: 'hotel-details',
  templateUrl: './hotel-details.component.html',
  styleUrls: ['./hotel-details.component.scss']
})
export class HotelDetailsComponent implements OnInit {
  hotel: Hotel
  test: Number
  subscription: Subscription
  constructor(private hotelService: HotelService, private route: ActivatedRoute, private router: Router) { }

  async ngOnInit() {
    this.subscription = this.route.params.subscribe(async params => {
      this.hotel = await this.hotelService.getById(params['id']).toPromise()
    })
  }

  ngOnDestroy(): void {

  }
}
