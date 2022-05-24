import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'search-hotel',
  templateUrl: './search-hotel.component.html',
  styleUrls: ['./search-hotel.component.scss']
})
export class SearchHotelComponent implements OnInit {

  @Input() isInHotelApp: boolean
  constructor() { }

  ngOnInit(): void {
  }

}
