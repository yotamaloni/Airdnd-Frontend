import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Modal } from '../models/modal';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  constructor() { }

  private _modal$ = new BehaviorSubject<Modal>({ type: null })
  public modal$ = this._modal$.asObservable()


  onSetModal(typeName: string) {
    this._modal$.next({ type: typeName })
  }
}
