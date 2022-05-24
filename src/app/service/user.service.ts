import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { BehaviorSubject, of } from 'rxjs';
import { StorageService } from './storage.service';
import { UtilsService } from './utils.service';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  private KEY = 'user';
  private _user$ = new BehaviorSubject<User>(this.StorageService.load(this.KEY) || this.getEmptyUser());
  public user$ = this._user$.asObservable();

  constructor(private StorageService: StorageService, private UtilsService: UtilsService) { }


  public getUser() {
    return this._user$.getValue();
  }

  public getEmptyUser(): User {
    const user: User = {
      firstName: 'Guest',
      lastName: '',
      _id: this.UtilsService.makeId(),
      country: 'israel',
      imgSrc: 'https://res.cloudinary.com/dnft2vfvz/image/upload/v1647273605/tx1lfdili2uxlnyyinio.jpg',
      initials: ''
    }
    user.initials = this.UtilsService.getInitials(user.firstName)
    return user
  }

  public signup(user: User) {
    user._id = this.UtilsService.makeId()
    user.initials = this.UtilsService.getInitials(user.firstName)
    this._user$.next(user)
    this.StorageService.save(this.KEY, user)
    // return of(user)
  }

  public changeCurrUser() {
    this._user$.next({
      firstName: 'Guest',
      lastName: '',
      _id: this.UtilsService.makeId(),
      country: 'israel',
      imgSrc: 'https://res.cloudinary.com/dnft2vfvz/image/upload/v1647273605/tx1lfdili2uxlnyyinio.jpg',
      initials: ''
    })
  }
}
