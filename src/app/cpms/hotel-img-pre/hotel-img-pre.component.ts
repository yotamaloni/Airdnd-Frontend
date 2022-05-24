import { Component, Input, OnInit } from '@angular/core';
import { Hotel } from 'src/app/models/hotel';

@Component({
  selector: 'hotel-img-pre',
  templateUrl: './hotel-img-pre.component.html',
  styleUrls: ['./hotel-img-pre.component.scss']
})
export class HotelImgPreComponent implements OnInit {
  @Input() hotel: Hotel

  constructor() { }

  ngOnInit(): void {
  }

}
