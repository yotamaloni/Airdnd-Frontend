import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, of, from } from 'rxjs';
import { Hotel } from '../models/hotel';
import { StorageService } from './storage.service';
import { DataService } from './data.service';
import { HotelFilter } from '../models/hotel-filter';

@Injectable({
  providedIn: 'root'
})
export class HotelService {
  KEY = 'hotels'

  _hotelsDB: Hotel[] = this.StorageService.load(this.KEY) || this.DataService.hotels

  constructor(public StorageService: StorageService, public DataService: DataService) { }

  _hotels$ = new BehaviorSubject<Array<Hotel>>([])
  hotels$ = this._hotels$.asObservable()
  _hotelFilter$ = new BehaviorSubject<HotelFilter>({} as HotelFilter)
  hotelFilter$ = this._hotelFilter$.asObservable()


  public query(): void {
    const filterBy = this._hotelFilter$.getValue()
    // const hotels = this._hotels$.filter(hotel => {
    //   // return (
    //   // hotel.country.toLoweCase()===filterBy.
    //   // )

    // }))
    this._hotels$.next(this._hotelsDB)
    this.StorageService.save(this.KEY, this._hotelsDB)
  }
  public getById(hotelId: string): Observable<Hotel> {
    const hotel = this._hotelsDB.find(currHotel => currHotel._id === hotelId)
    return of({ ...hotel })
  }

  setFilterBy = (filterBy: HotelFilter): void => {
    this._hotelFilter$.next(filterBy)
    this.query()
  }

}
