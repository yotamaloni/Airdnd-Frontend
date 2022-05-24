import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelImgPreComponent } from './hotel-img-pre.component';

describe('HotelImgPreComponent', () => {
  let component: HotelImgPreComponent;
  let fixture: ComponentFixture<HotelImgPreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HotelImgPreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HotelImgPreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
