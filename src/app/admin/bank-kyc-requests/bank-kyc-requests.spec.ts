import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankKycRequests } from './bank-kyc-requests';

describe('BankKycRequests', () => {
  let component: BankKycRequests;
  let fixture: ComponentFixture<BankKycRequests>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BankKycRequests]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BankKycRequests);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
