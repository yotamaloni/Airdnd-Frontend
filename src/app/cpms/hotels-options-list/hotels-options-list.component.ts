import { Component, OnInit } from '@angular/core';
import { HotelOption } from 'src/app/models/hotel-option';
import { DataService } from 'src/app/service/data.service'

@Component({
  selector: 'hotels-options-list',
  templateUrl: './hotels-options-list.component.html',
  styleUrls: ['./hotels-options-list.component.scss']
})
export class HotelsOptionsListComponent implements OnInit {

  hotelsOptions: HotelOption[] = []

  constructor(private dataService: DataService) {
  }

  ngOnInit(): void {
    this.hotelsOptions = this.dataService.hotelOptions
  }

}
