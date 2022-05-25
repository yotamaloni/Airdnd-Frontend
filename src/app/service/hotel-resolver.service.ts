import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Hotel } from '../models/hotel';
import { HotelService } from './hotel.service';

@Injectable({
  providedIn: 'root'
})
export class HotelResolverService implements Resolve<Promise<Hotel>> {

  constructor(private hotelService: HotelService) { }

  async resolve(route: ActivatedRouteSnapshot): Promise<Hotel> {
    const { id } = route.params
    const hotel = await this.hotelService.getById(id).toPromise()
    return hotel
  }
}
