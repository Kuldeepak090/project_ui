import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprovedTemplatesComponent } from './approved-templates.component';

describe('ApprovedTemplatesComponent', () => {
  let component: ApprovedTemplatesComponent;
  let fixture: ComponentFixture<ApprovedTemplatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApprovedTemplatesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApprovedTemplatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
