import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Request } from '../../services/request';


@Component({
  selector: 'app-bank-service-requests',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './bank-service-requests.html',
  styleUrl: './bank-service-requests.css'
})
export class BankServiceRequests {
  serviceRequests = inject(Request).allRequests$;
}
