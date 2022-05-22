import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelsOptionsListComponent } from './hotels-options-list.component';

describe('HotelsOptionsListComponent', () => {
  let component: HotelsOptionsListComponent;
  let fixture: ComponentFixture<HotelsOptionsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HotelsOptionsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HotelsOptionsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
