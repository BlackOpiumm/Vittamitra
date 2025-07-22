import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';

export interface ServiceRequest {
  type: string;
  desc: string;
  status: 'Pending' | 'Completed';
}

@Injectable({
  providedIn: 'root'
})
export class Request {
  private allRequestsSubject = new BehaviorSubject<ServiceRequest[]>([]);
  allRequests$ = this.allRequestsSubject.asObservable();

  addRequest(req: ServiceRequest) {
    const current = this.allRequestsSubject.getValue();
    this.allRequestsSubject.next([...current, req]);
  }
}
