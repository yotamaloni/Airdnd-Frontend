import { Component, Input, OnInit } from '@angular/core';
import { Hotel } from 'src/app/models/hotel';
@Component({
  selector: 'hotel-preview',
  templateUrl: './hotel-preview.component.html',
  styleUrls: ['./hotel-preview.component.scss']
})
export class HotelPreviewComponent implements OnInit {
  @Input() hotel: Hotel
  constructor() { }

  ngOnInit(): void {
  }

}
