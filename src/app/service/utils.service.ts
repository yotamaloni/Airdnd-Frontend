import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor() { }
  makeId(length: number = 6): string {
    var id = ''
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    for (let i = 0; i < length; i++) {
      id += chars.charAt(Math.floor(Math.random() * chars.length))
    }
    return id
  }
  getInitials(fullName): string {
    let splittedName = fullName.split(' '),
      initials = splittedName[0].substring(0, 1).toUpperCase();

    if (splittedName.length > 1) {
      initials += splittedName[splittedName.length - 1].substring(0, 1).toUpperCase();
    }

    return initials;
  }

  getRandomImg(): string {
    return this.IMAGES[Math.floor(Math.random() * this.IMAGES.length)]
  }

  IMAGES = [
    'https://res.cloudinary.com/dnft2vfvz/image/upload/v1653236174/Airdnd/jsl7ipwu43abrulezs7y.jpg',
    'https://res.cloudinary.com/dnft2vfvz/image/upload/v1653236171/Airdnd/qwwt4c1wfnldwlhp645e.jpg',
    'https://res.cloudinary.com/dnft2vfvz/image/upload/v1653236170/Airdnd/lqcuptrkmrjnvwdp7lkx.jpg',
    'https://res.cloudinary.com/dnft2vfvz/image/upload/v1653236165/Airdnd/kwgmq1s5dimz5ngb83ja.jpg',
    'https://res.cloudinary.com/dnft2vfvz/image/upload/v1653236161/Airdnd/wrr7mr61fyzogfopuebk.jpg',
    'https://res.cloudinary.com/dnft2vfvz/image/upload/v1653236160/Airdnd/spjqkh4mlqs3iosoih8a.jpg',
    'https://res.cloudinary.com/dnft2vfvz/image/upload/v1653236158/Airdnd/xc4b7mfkw4ggzeavpcss.jpg',
    'https://res.cloudinary.com/dnft2vfvz/image/upload/v1653236157/Airdnd/ddwnuxkwqscazntgpzox.jpg',
    'https://res.cloudinary.com/dnft2vfvz/image/upload/v1653236147/Airdnd/uhfmmjmtog4uq6apyjwj.jpg',
    'https://res.cloudinary.com/dnft2vfvz/image/upload/v1653236140/Airdnd/kaoqioc1qjgnswyjkusb.jpg',
    'https://res.cloudinary.com/dnft2vfvz/image/upload/v1653236129/Airdnd/ckzwnwzdqyjsrwlndwvq.jpg',
  ]
}
