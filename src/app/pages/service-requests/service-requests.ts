import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Request, ServiceRequest } from '../../services/request';
@Component({
  selector: 'app-service-requests',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './service-requests.html',
  styleUrls: ['./service-requests.css'],
})
export class ServiceRequests {
  requestType = '';
  description = '';
  submittedRequests: ServiceRequest[] = [];

  private requestService = inject(Request);

  submitRequest(form: any) {
    if (form.valid) {
      const request: ServiceRequest = {
        type: this.requestType,
        desc: this.description,
        status: 'Pending',
      };
      this.submittedRequests.push(request);
      this.requestService.addRequest(request); 
      form.resetForm();
    }
  }
}
