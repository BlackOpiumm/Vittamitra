import { Routes } from '@angular/router';

import { Login } from './pages/login/login';
import { Dashboard } from './pages/dashboard/dashboard';

import { KycForm } from './pages/kyc-form/kyc-form';
import { Accounts } from './pages/accountsC/accountsC';
import { MiniStatement } from './pages/mini-statement/mini-statement';
import { ServiceRequests } from './pages/service-requests/service-requests';

import { BankDashboard } from './admin/bank-dashboard/bank-dashboard';
import { BankKycRequests } from './admin/bank-kyc-requests/bank-kyc-requests';
import { BankServiceRequests } from './admin/bank-service-requests/bank-service-requests';

export const routes: Routes = [
    { path: '', component: Login},
    { path: 'dashboard', component: Dashboard, children: [
        { path: 'kyc', component: KycForm },
        { path: 'accounts', component: Accounts },
        { path: 'mini-statement/:accountId', component: MiniStatement },
        { path: 'service', component: ServiceRequests },
    ]},
    { path: 'bank-dashboard', component: BankDashboard, children: [
        { path: 'kyc-requests', component: BankKycRequests },
        { path: 'service-requests', component: BankServiceRequests },
    ]}
];
