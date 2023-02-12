import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingTemplatesComponent } from './pending-templates.component';

describe('PendingTemplatesComponent', () => {
  let component: PendingTemplatesComponent;
  let fixture: ComponentFixture<PendingTemplatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PendingTemplatesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PendingTemplatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
