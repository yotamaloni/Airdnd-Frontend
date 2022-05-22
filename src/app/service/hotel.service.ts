import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, of, from } from 'rxjs';
import { Hotel } from '../models/hotel';
import { StorageService } from './storage.service';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class HotelService {
  KEY = 'hotels'

  _hotelsDB: Hotel[] = this.StorageService.load(this.KEY) || this.DataService.hotels

  constructor(public StorageService: StorageService, public DataService: DataService) { }

  _hotels$ = new BehaviorSubject<Array<Hotel>>([])
  hotels$ = this._hotels$.asObservable()


  public query(): void {
    this._hotels$.next(this._hotelsDB)
  }
}
