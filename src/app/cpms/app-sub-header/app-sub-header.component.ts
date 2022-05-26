import { Component, OnInit, Input, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-sub-header',
  templateUrl: './app-sub-header.component.html',
  styleUrls: ['./app-sub-header.component.scss']
})
export class AppSubHeaderComponent implements OnInit, OnDestroy {
  @Input() windowScrollY: number
  isWindowScrolled: boolean

  constructor() { }

  ngOnInit(): void {
    this.onScroll()
    window.addEventListener('scroll', this.onScroll, true)
  }

  onScroll = (): void => {
    this.isWindowScrolled = window.scrollY === 0 ? false : true
  }
  ngOnDestroy(): void {
    window.removeEventListener('scroll', this.onScroll)
  }
}
