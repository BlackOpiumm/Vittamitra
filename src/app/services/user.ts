import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class User {
  private usernameSubject = new BehaviorSubject<string>('');

  
  username$ = this.usernameSubject.asObservable();

  sendUsername(name: string) {
    this.usernameSubject.next(name);
    console.log('User service: Received username ->', name);
  }
}
