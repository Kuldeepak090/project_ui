import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditLogComponent } from './credit-log.component';

describe('CreditLogComponent', () => {
  let component: CreditLogComponent;
  let fixture: ComponentFixture<CreditLogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreditLogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreditLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
