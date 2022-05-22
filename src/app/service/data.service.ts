import { Injectable } from '@angular/core';
import { HotelOption } from '../models/hotel-option';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  hotelOptions: HotelOption[] = [
    {
      txt: "arctic",
      icon: 'ac_unit'
    },
    {
      txt: "lake",
      icon: 'water'
    },
    {
      txt: "shared homes",
      icon: 'people'
    },
    {
      txt: "bed & breakfast",
      icon: 'coffee'
    },
    {
      txt: "desert",
      icon: 'brightness_low'
    },
    {
      txt: "national park",
      icon: 'park'
    },
    {
      txt: "camping",
      icon: 'details'
    },
    {
      txt: "tiny homes",
      icon: 'house'
    },
    {
      txt: "beach",
      icon: 'beach_access'
    },
    {
      txt: "countryside",
      icon: 'ac_unit'
    },
    {
      txt: "surfing",
      icon: 'surfing'
    },
    {
      txt: "amazing views",
      icon: 'landscape'
    },
    {
      txt: "castles",
      icon: 'castle'
    },
    {
      txt: "golfing",
      icon: 'golf_course'
    },
    {
      txt: "ski",
      icon: 'downhill_skiing'
    },
    {
      txt: "boat",
      icon: 'directions_boat_filled'
    },


  ]
  constructor() { }

}
