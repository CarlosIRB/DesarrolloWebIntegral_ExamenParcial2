import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: 'inicio', loadComponent: () => import('./features/inicio/inicio.component') },
    { path: 'productos', loadComponent: () => import('./features/products/products.component') },
    { path: 'contacto', loadComponent: () => import('./features/contacto/contacto.component') },
    { path: '', redirectTo: 'inicio', pathMatch: 'full' },
    { path: '**', redirectTo: 'inicio', pathMatch: 'full' },

];
