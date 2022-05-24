import { Component, Input, OnInit } from '@angular/core';
import { Hotel } from 'src/app/models/hotel';

@Component({
  selector: 'hotel-details-header',
  templateUrl: './hotel-details-header.component.html',
  styleUrls: ['./hotel-details-header.component.scss']
})
export class HotelDetailsHeaderComponent implements OnInit {
  @Input() hotel: Hotel
  constructor() { }

  ngOnInit(): void {
  }

}
