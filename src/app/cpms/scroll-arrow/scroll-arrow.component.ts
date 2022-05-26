import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'scroll-arrow',
  templateUrl: './scroll-arrow.component.html',
  styleUrls: ['./scroll-arrow.component.scss']
})
export class ScrollArrowComponent implements OnInit {
  @Input() direction: string
  @Input() isDisable: boolean
  @Output() onClickArrow = new EventEmitter<string>()
  constructor() { }

  ngOnInit(): void {
  }

  onClickOnArrow(direction): void {
    this.onClickArrow.emit(direction)

  }

}
