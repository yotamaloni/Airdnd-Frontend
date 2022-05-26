import { Component, Input, OnInit } from '@angular/core';
import { Modal } from 'src/app/models/modal';

@Component({
  selector: 'dynamic-modal',
  templateUrl: './dynamic-modal.component.html',
  styleUrls: ['./dynamic-modal.component.scss']
})
export class DynamicModalComponent implements OnInit {
  @Input() modal: Modal
  constructor() { }

  ngOnInit(): void {
  }

}
