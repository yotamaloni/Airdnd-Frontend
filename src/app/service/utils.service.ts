import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor() { }
  makeId(length: Number = 6): string {
    var id = ''
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    for (let i = 0; i < length; i++) {
      id += chars.charAt(Math.floor(Math.random() * chars.length))
    }
    return id
  }
  getInitials(fullName): String {
    let splittedName = fullName.split(' '),
      initials = splittedName[0].substring(0, 1).toUpperCase();

    if (splittedName.length > 1) {
      initials += splittedName[splittedName.length - 1].substring(0, 1).toUpperCase();
    }

    return initials;
  }
}
