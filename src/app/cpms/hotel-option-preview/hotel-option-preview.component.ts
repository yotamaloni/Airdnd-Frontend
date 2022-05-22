import { Component, Input, OnInit } from '@angular/core';
import { HotelOption } from 'src/app/models/hotel-option';

@Component({
  selector: 'hotel-option-preview',
  templateUrl: './hotel-option-preview.component.html',
  styleUrls: ['./hotel-option-preview.component.scss']
})
export class HotelOptionPreviewComponent implements OnInit {
  @Input() hotelOption: HotelOption

  constructor() { }

  ngOnInit(): void {
  }

}
