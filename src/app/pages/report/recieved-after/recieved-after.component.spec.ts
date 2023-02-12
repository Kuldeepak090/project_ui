import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecievedAfterComponent } from './recieved-after.component';

describe('RecievedAfterComponent', () => {
  let component: RecievedAfterComponent;
  let fixture: ComponentFixture<RecievedAfterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecievedAfterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecievedAfterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
