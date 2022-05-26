import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'search-hotel',
  templateUrl: './search-hotel.component.html',
  styleUrls: ['./search-hotel.component.scss']
})
export class SearchHotelComponent implements OnInit {

  @Input() isInHotelApp: boolean
  @Output() onExpandHeader = new EventEmitter()

  isExpanded: boolean = false
  constructor() { }

  ngOnInit(): void {
  }

  expandSearch = (): void => {
    this.isExpanded = !this.isExpanded
    this.onExpandHeader.emit()
  }

}
