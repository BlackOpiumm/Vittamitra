import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { User } from '../../services/user';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.css'] 
})
export class Dashboard {
  username = '';

  constructor(private userService: User, private router: Router) {
    this.userService.username$.subscribe(name => {
      this.username = name;
      console.log('Dashboard received username:', this.username);
    });
  }
  

  logout() {
    this.userService.sendUsername('');
    this.router.navigate(['']);
  }
}
