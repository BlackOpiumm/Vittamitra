import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HsbcApiService } from '../../services/hsbc-api';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-accounts',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './accountsC.html',
  styleUrl: './accountsC.css'
})
export class Accounts implements OnInit {

  accounts: any[] = [];

  constructor(private hsbcService: HsbcApiService) {}

  ngOnInit() {
    this.hsbcService.getAccounts().subscribe({
      next: (res) => {
        console.log('API Response:', res);
        this.accounts = res?.Data?.Account || [];
      },
      error: (err) => {
        console.error('API Error:', err);
      }
    });
  }
}
