import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCongigComponent } from './user-congig.component';

describe('UserCongigComponent', () => {
  let component: UserCongigComponent;
  let fixture: ComponentFixture<UserCongigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserCongigComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserCongigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
