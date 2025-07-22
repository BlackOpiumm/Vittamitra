import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HsbcApiService {

  private baseUrl = 'https://sandbox.ob.mivision.hsbc.co.uk/mock/obie/open-banking/v3.1/aisp';
  
  private accessToken = 'bK80iYvVYyEInEstkvqtAoEJv9Dax5k0jpyt340BJofygrKI9SEChG3RBtUIqMBzabjh40uiJHbzERPrDK1GXOwsS3Tx2qHjJkGMj3wJtpkmoJwbhACyRrAVHegiqA7MqIhgqoXsMdpzHKAQXeUxLnFErxR7kaMQtcUEfWhhjaOthWxNUs3vZ73pdE8mRZiHk5srXA6GUAr6sGPxTLeU7kkYKZ2VnbRq2KqL1hXD7lBmXRGGwTggEEEK3YDN1rnygWQ8QDSwNeAV7ZRTm2XZAAzWyTNHkQj72qew0DH2vDx8pCOqSLfglhnWa9hajppnWtI1nvAAuArhV3uaaAQQKbOgErvnLK215ldR38dRWzPZ4Uz67HOmPAfVbU6K14W3J2AYRSSzqDrdi2wMUS6rmZSk1Q6moifMHYtufcGNalpyfWgJrgXp3iOgneIHTa6gg3CEFUJLKnzrQBUqKLbZ0u1GTKKBtXrfXwaYMyfPAXETErGpKOR6LloKQOv3FPjP';

  constructor(private http: HttpClient) {}

  private getHeaders(): HttpHeaders {
    return new HttpHeaders({
      'Authorization': `Bearer ${this.accessToken}`,
      'Accept': 'application/json',
      'x-fapi-auth-date': 'Tue, 18 Apr 2023 14:42:25 UTC',
      'x-fapi-customer-ip-address': '12.201.45.125',
      'x-fapi-interaction-id': '20177a90-5e29-43ba-bea0-cc6c344a9d32',
      'x-customer-user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)...'
    });
  }

  getAccounts(): Observable<any> {
    return this.http.get(`${this.baseUrl}/accounts`, {
      headers: this.getHeaders()
    });
  }

  getTransactions(accountId: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/accounts/${accountId}/transactions`, {
      headers: this.getHeaders()
    });
  }

  getBalance(accountId: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/accounts/${accountId}/balances`, {
      headers: this.getHeaders()
    });
  }
}
