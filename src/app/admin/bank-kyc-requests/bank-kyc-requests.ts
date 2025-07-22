import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Kyc,KycRequest } from '../../services/kyc';

@Component({
  selector: 'app-bank-kyc-requests',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './bank-kyc-requests.html',
  styleUrl: './bank-kyc-requests.css'
})
export class BankKycRequests {
  requests: KycRequest[] = [];

  constructor(private kycService: Kyc) {
    this.kycService.kycRequests$.subscribe(res => this.requests = res);
  }

  updateStatus(index: number, status: 'Approved' | 'Rejected') {
    this.kycService.updateRequestStatus(index, status);
  }
}
