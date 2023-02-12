import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DateWiseComponent } from './date-wise.component';

describe('DateWiseComponent', () => {
  let component: DateWiseComponent;
  let fixture: ComponentFixture<DateWiseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DateWiseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DateWiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
