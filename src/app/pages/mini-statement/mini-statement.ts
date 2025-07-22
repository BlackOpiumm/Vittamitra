import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HsbcApiService } from '../../services/hsbc-api';

@Component({
  selector: 'app-mini-statement',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mini-statement.html',
  styleUrl: './mini-statement.css'
})
export class MiniStatement implements OnInit {
  transactions: any[] = [];
  balance: string = 'Loading...';
  accountId: string = '';

  constructor(
    private hsbcService: HsbcApiService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.accountId = params.get('accountId') || '';
      if (this.accountId) {
        this.fetchData(this.accountId);
      }
    });
  }

  fetchData(accountId: string) {
    
    this.hsbcService.getTransactions(accountId).subscribe({
      next: (res) => {
        const raw = res?.Data?.Transaction || [];
        this.transactions = raw.map((txn: any) => ({
          date: txn.BookingDateTime,
          description: txn.TransactionInformation || txn.MerchantDetails?.MerchantName || 'N/A',
          amount: txn.Amount?.Amount,
          type: txn.CreditDebitIndicator?.toLowerCase()
        }));
      },
      error: (err) => console.error('Txn error:', err)
    });

    
    this.hsbcService.getBalance(accountId).subscribe({
      next: (res) => {
        const bal = res?.Data?.Balance?.[0];
        this.balance = bal?.Amount?.Amount || '0';
      },
      error: (err) => console.error('Balance error:', err)
    });
  }
}
