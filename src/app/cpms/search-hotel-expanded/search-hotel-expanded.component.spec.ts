import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchHotelExpandedComponent } from './search-hotel-expanded.component';

describe('SearchHotelExpandedComponent', () => {
  let component: SearchHotelExpandedComponent;
  let fixture: ComponentFixture<SearchHotelExpandedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchHotelExpandedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchHotelExpandedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
