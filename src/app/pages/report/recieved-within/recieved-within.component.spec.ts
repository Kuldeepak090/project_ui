import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecievedWithinComponent } from './recieved-within.component';

describe('RecievedWithinComponent', () => {
  let component: RecievedWithinComponent;
  let fixture: ComponentFixture<RecievedWithinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecievedWithinComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecievedWithinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
