import { Component, OnInit } from '@angular/core';
import { HotelOption } from 'src/app/models/hotel-option';
import { DataService } from 'src/app/service/data.service'
import { ElementRef } from '@angular/core';
import { ViewChild } from '@angular/core';

@Component({
  selector: 'hotels-options-list',
  templateUrl: './hotels-options-list.component.html',
  styleUrls: ['./hotels-options-list.component.scss']
})
export class HotelsOptionsListComponent implements OnInit {
  hotelsOptions: HotelOption[] = []
  isDisableLeftArrow: boolean = true
  isDisableRightArrow: boolean = false
  @ViewChild('widgetsContent', { static: false }) widgetsContent: ElementRef;

  constructor(private dataService: DataService) {
  }

  ngOnInit(): void {
    this.hotelsOptions = this.dataService.hotelOptions
  }

  onScrollTo(direction: string): void {
    let scrollChange = +150
    if (direction === 'left') scrollChange *= -1
    this.widgetsContent.nativeElement.scrollLeft += scrollChange;
  }

  onScroll() {
    this.checkArrowDisable()
  }

  checkArrowDisable() {
    const { scrollLeft, clientWidth, scrollWidth } = this.widgetsContent.nativeElement
    scrollWidth - (scrollLeft + clientWidth) <= 0 ? this.isDisableRightArrow = true : this.isDisableRightArrow = false
    scrollLeft <= 0 ? this.isDisableLeftArrow = true : this.isDisableLeftArrow = false
  }
}
