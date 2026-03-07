import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'mostrar-orcamento',
        loadComponent: () => import('./mostrar-orcamento/mostrar-orcamento.component').then(m => m.MostrarOrcamentoComponent)
    }
];
