import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankServiceRequests } from './bank-service-requests';

describe('BankServiceRequests', () => {
  let component: BankServiceRequests;
  let fixture: ComponentFixture<BankServiceRequests>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BankServiceRequests]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BankServiceRequests);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
