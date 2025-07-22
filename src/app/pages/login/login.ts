// login.ts
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { User } from '../../services/user';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  email = '';
  password = '';
  role = '';
  errorMessage = '';

  constructor(private router: Router, private userService: User) {}

  login(form: NgForm) {
    if (!form.valid) {
      this.errorMessage = 'Please enter valid details.';
      return;
    }
    
    console.log('Login component: Sending username ->', this.email);
    this.userService.sendUsername(this.email.split('@')[0]);
    this.errorMessage = '';
    
    if (this.role === 'admin') {
      this.router.navigate(['/bank-dashboard']);
    } else {
      this.router.navigate(['/dashboard']);
    }
  }
}
