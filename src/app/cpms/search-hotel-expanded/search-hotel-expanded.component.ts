import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { HotelFilter } from 'src/app/models/hotel-filter';
import { Modal } from 'src/app/models/modal';
import { HotelService } from 'src/app/service/hotel.service';
import { ModalService } from 'src/app/service/modal.service';

@Component({
  selector: 'search-hotel-expanded',
  templateUrl: './search-hotel-expanded.component.html',
  styleUrls: ['./search-hotel-expanded.component.scss']
})
export class SearchHotelExpandedComponent implements OnInit, OnDestroy {
  activeDivName: string = 'date'
  modal: Modal
  subscriptionModal: Subscription
  filterBy: HotelFilter = {} as HotelFilter
  subscriptionFilterBy: Subscription
  constructor(private modalService: ModalService, private hotelService: HotelService) { }

  ngOnInit(): void {
    this.subscriptionModal = this.modalService.modal$.subscribe(modal => {
      this.modal = modal
    })
    this.subscriptionFilterBy = this.hotelService.hotelFilter$.subscribe(filterBy => {
      this.filterBy = filterBy
    })
  }

  setModal = (type: string): void => {
    this.modalService.onSetModal(type)
    this.activeDivName = type
  }
  ngOnDestroy(): void {
    this.modalService.onSetModal(null)
    this.subscriptionModal.unsubscribe()
  }

  onSetFilterBy = (): void => {
    this.hotelService.setFilterBy({ ...this.filterBy })
    console.log("🟡 ~ this.filterBy", this.filterBy)
  }
}
