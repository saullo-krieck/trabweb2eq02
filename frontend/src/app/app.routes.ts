import { Routes } from '@angular/router';
import { FuncionarioListComponent } from './pages/funcionario/funcionario-list/funcionario-list';
import { FuncionarioFormComponent } from './pages/funcionario/funcionario-form/funcionario-form';
import { CategoriaListComponent } from './pages/categoria/categoria-list/categoria-list';
import { CategoriaFormComponent } from './pages/categoria/categoria-form/categoria-form';
import { MostrarOrcamentoComponent } from './pages/cliente/mostrar-orcamento/mostrar-orcamento.component';
import { SolicitacaoManutencao } from './pages/cliente/solicitacao-manutencao/solicitacao-manutencao';
import { RelatoriosComponent } from './pages/relatorios/relatorios.component';
import { PagarServico } from './pages/cliente/pagar-servico/pagar-servico';
import { ListarSolicitacoesComponent } from './pages/listar-solicitacoes-component/listar-solicitacoes-component';
import { EfetuarOrcamentoComponent } from './pages/efetuar-orcamento-component/efetuar-orcamento-component';
import { LoginComponent } from './pages/login/login';
import { AutoCadastroComponent } from './pages/auto_cadastro/auto-cadastro';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },

  // Rotas públicas 
  { path: 'login', component: LoginComponent },
  { path: 'auto-cadastro', component: AutoCadastroComponent },

  //Rotas de Clientes
  { path: 'cliente/mostrar-orcamento', component: MostrarOrcamentoComponent },
  { path: 'cliente/solicitacao-manutencao', component: SolicitacaoManutencao },
  { path: 'cliente/pagar-servico', component: PagarServico },


  // Rotas de Categorias
  { path: 'categorias', component: CategoriaListComponent },
  { path: 'categorias/novo', component: CategoriaFormComponent },
  { path: 'categorias/editar/:id', component: CategoriaFormComponent },

  // Rotas de Funcionários
  { path: 'funcionarios', component: FuncionarioListComponent },
  { path: 'funcionarios/novo', component: FuncionarioFormComponent },
  { path: 'funcionarios/editar/:id', component: FuncionarioFormComponent },

  //Rotas de Orçamentos e Solicitações de Manutenção
  { path: 'orcamentos', component: ListarSolicitacoesComponent },
  { path: 'orcamentos/efetuar', component: EfetuarOrcamentoComponent },

  // Rota de Relatórios
  { path: 'relatorios', component: RelatoriosComponent },

  { path: '**', redirectTo: 'login' }
];
