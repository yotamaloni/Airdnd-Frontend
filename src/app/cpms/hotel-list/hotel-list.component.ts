import { Component, Input, OnInit } from '@angular/core';
import { Hotel } from 'src/app/models/hotel';

@Component({
  selector: 'hotel-list',
  templateUrl: './hotel-list.component.html',
  styleUrls: ['./hotel-list.component.scss']
})
export class HotelListComponent implements OnInit {
  @Input() hotels: Hotel[]
  constructor() { }

  ngOnInit(): void {
  }

}
