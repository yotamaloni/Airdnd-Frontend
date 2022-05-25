import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Hotel } from 'src/app/models/hotel';
import { HotelService } from 'src/app/service/hotel.service';
import { mergeMap } from 'rxjs';

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

  ngOnInit() {
    this.subscription = this.route.data.subscribe(data => {
      this.hotel = data['hotel']
    })


    // this.subscription = this.route.params.subscribe(async params => {
    //   this.hotel = await this.hotelService.getById(params['id']).toPromise()
    // })

    // this.subscription = this.route.params
    //   .pipe(mergeMap(params => this.hotelService.getById(params['id'])))
    //   .subscribe(hotel => {
    //     this.hotel = hotel
    //   })
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }
}
