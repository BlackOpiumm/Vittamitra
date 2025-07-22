import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Kyc, KycRequest } from '../../services/kyc';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-kyc-form',
  imports: [FormsModule, CommonModule],
  templateUrl: './kyc-form.html',
  styleUrl: './kyc-form.css'
})

export class KycForm {

  constructor(private kycService: Kyc) {}

  user = {
    name:'',
    dob: '',
    pan: '',
    aadhar: '',
    mobile: '',
    email: ''
  };

  submitted= false;
  success=false;

  submitForm(form:any){

    this.submitted = true;

    if(form.valid ){
      const req: KycRequest = { ...this.user, status: 'Pending' };
      this.kycService.addRequest(req);
      this.success = true;
      console.log('KYC Request Added:', req);

    } else {
      this.success = false;
      
    }
 }
} 