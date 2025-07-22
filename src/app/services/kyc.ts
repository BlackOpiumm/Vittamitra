import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BehaviorSubject, of } from 'rxjs';

export interface KycRequest {
  name: string;
  dob: string;
  pan: string;
  aadhar: string;
  mobile: string;
  email: string;
  status: 'Pending' | 'Approved' | 'Rejected';
}

@Injectable({
  providedIn: 'root'
})
export class Kyc {

  private kycRequestsSubject = new BehaviorSubject<KycRequest[]>([]);
  kycRequests$ = this.kycRequestsSubject.asObservable();

  addRequest(req: KycRequest) {
    const current = this.kycRequestsSubject.value;
    this.kycRequestsSubject.next([...current, req]);
  }

  updateRequestStatus(index: number, status: 'Approved' | 'Rejected') {
    const updated = [...this.kycRequestsSubject.value];
    updated[index].status = status;
    this.kycRequestsSubject.next(updated);
  }

  getRequests() {
    return this.kycRequestsSubject.value;
  }
}
