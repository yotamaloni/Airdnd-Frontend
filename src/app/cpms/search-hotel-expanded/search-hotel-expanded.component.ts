import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Modal } from 'src/app/models/modal';
import { ModalService } from 'src/app/service/modal.service';

@Component({
  selector: 'search-hotel-expanded',
  templateUrl: './search-hotel-expanded.component.html',
  styleUrls: ['./search-hotel-expanded.component.scss']
})
export class SearchHotelExpandedComponent implements OnInit, OnDestroy {
  activeDivName: String = 'date'
  modal: Modal
  subscription: Subscription
  constructor(private modalService: ModalService) { }

  ngOnInit(): void {
    this.subscription = this.modalService.modal$.subscribe(data => {
      this.modal = data
    })
  }

  setModal = (type: string): void => {
    this.modalService.onSetModal(type)
    this.activeDivName = type
  }
  ngOnDestroy(): void {
    this.modalService.onSetModal(null)
    this.subscription.unsubscribe()
  }
}
