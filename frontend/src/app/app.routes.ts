import { Routes } from '@angular/router';
import { FuncionarioListComponent } from './pages/funcionario/funcionario-list/funcionario-list';
import { FuncionarioFormComponent } from './pages/funcionario/funcionario-form/funcionario-form';
import { CategoriaListComponent } from './pages/categoria/categoria-list/categoria-list';
import { CategoriaFormComponent } from './pages/categoria/categoria-form/categoria-form';
import { MostrarOrcamentoComponent } from './pages/cliente/mostrar-orcamento/mostrar-orcamento.component';
import { SolicitacaoManutencao } from './pages/cliente/solicitacao-manutencao/solicitacao-manutencao';

export const routes: Routes = [
  { path: '', redirectTo: 'funcionarios', pathMatch: 'full' },
  
  //Rotas de Clientes 
  { path: 'cliente/mostrar-orcamento', component: MostrarOrcamentoComponent },
  // Rotas de Funcionários
  { path: 'funcionarios', component: FuncionarioListComponent },
  { path: 'funcionarios/novo', component: FuncionarioFormComponent },
  { path: 'funcionarios/editar/:id', component: FuncionarioFormComponent },

  // Rotas de Categorias
  { path: 'categorias', component: CategoriaListComponent },
  { path: 'categorias/novo', component: CategoriaFormComponent },
  { path: 'categorias/editar/:id', component: CategoriaFormComponent },
  { path: 'solicitacao-manutencao', component: SolicitacaoManutencao },
  
  { path: '**', redirectTo: 'funcionarios' } 
];
