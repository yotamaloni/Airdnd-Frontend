import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelOptionPreviewComponent } from './hotel-option-preview.component';

describe('HotelOptionPreviewComponent', () => {
  let component: HotelOptionPreviewComponent;
  let fixture: ComponentFixture<HotelOptionPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HotelOptionPreviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HotelOptionPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
