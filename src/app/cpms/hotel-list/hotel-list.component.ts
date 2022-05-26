import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Hotel } from 'src/app/models/hotel';
import { Modal } from 'src/app/models/modal';
import { ModalService } from 'src/app/service/modal.service';

@Component({
  selector: 'hotel-list',
  templateUrl: './hotel-list.component.html',
  styleUrls: ['./hotel-list.component.scss']
})
export class HotelListComponent implements OnInit, OnDestroy {
  @Input() hotels: Hotel[]
  @Input() isInSearch: boolean
  subscription: Subscription
  modal: Modal = { type: null }

  constructor(private modalService: ModalService) { }

  ngOnInit(): void {
    this.subscription = this.modalService.modal$.subscribe(modal => {
      this.modal = modal
    })
  }


  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }
}
