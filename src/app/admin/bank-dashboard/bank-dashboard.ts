import { Component, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Kyc } from '../../services/kyc';
import { Request } from '../../services/request';
import { map, Observable } from 'rxjs';

@Component({
  selector: 'app-bank-dashboard',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './bank-dashboard.html',
  styleUrl: './bank-dashboard.css',
})
export class BankDashboard {
  private router = inject(Router);
  private kycService = inject(Kyc);
  private requestService = inject(Request);

  totalCustomers = 120;
  pendingKycs$: Observable<number> = this.kycService.kycRequests$.pipe(
    map((requests) => requests.filter((req) => req.status === 'Pending').length)
  );
  serviceRequests$: Observable<number> = this.requestService.allRequests$.pipe(
    map((requests) => requests.filter((req) => req.status === 'Pending').length)
  );

  logout() {
    this.router.navigate(['']);
  }
}
