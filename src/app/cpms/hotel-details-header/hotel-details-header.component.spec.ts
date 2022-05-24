import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelDetailsHeaderComponent } from './hotel-details-header.component';

describe('HotelDetailsHeaderComponent', () => {
  let component: HotelDetailsHeaderComponent;
  let fixture: ComponentFixture<HotelDetailsHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HotelDetailsHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HotelDetailsHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
