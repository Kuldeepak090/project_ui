import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatsappSummaryComponent } from './whatsapp-summary.component';

describe('WhatsappSummaryComponent', () => {
  let component: WhatsappSummaryComponent;
  let fixture: ComponentFixture<WhatsappSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhatsappSummaryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhatsappSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
