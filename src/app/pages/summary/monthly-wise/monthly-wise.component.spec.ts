import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthlyWiseComponent } from './monthly-wise.component';

describe('MonthlyWiseComponent', () => {
  let component: MonthlyWiseComponent;
  let fixture: ComponentFixture<MonthlyWiseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonthlyWiseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MonthlyWiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
