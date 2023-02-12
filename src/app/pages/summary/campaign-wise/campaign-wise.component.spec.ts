import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampaignWiseComponent } from './campaign-wise.component';

describe('CampaignWiseComponent', () => {
  let component: CampaignWiseComponent;
  let fixture: ComponentFixture<CampaignWiseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CampaignWiseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CampaignWiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
