import { Routes } from '@angular/router';
import { Home } from './pages/home/home';

export const routes: Routes = [
    { path: '', component: Home },
    { path: 'about', redirectTo: '', pathMatch: 'full' },
    { path: 'formations', redirectTo: '', pathMatch: 'full' },
    { path: 'instructors', redirectTo: '', pathMatch: 'full' },
    { path: 'contact', redirectTo: '', pathMatch: 'full' },
    { path: '**', redirectTo: '' }
];
