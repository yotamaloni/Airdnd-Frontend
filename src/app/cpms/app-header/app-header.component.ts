import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/service/user.service';
import { Observable, Subscription } from 'rxjs';


@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss']
})
export class AppHeaderComponent implements OnInit, OnDestroy {
  @Input() isInHotelApp: boolean
  user: User
  user$: Observable<User>
  subscription: Subscription
  constructor(private UserService: UserService) { }

  ngOnInit(): void {
    this.subscription = this.UserService.user$.subscribe(user => {
      this.user = user
    })
  }

  changeUser = () => {
    this.UserService.changeCurrUser()
  }
  
  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }

}
