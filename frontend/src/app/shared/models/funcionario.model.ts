export interface Funcionario {
  id?: number;
  nome: string;
  email: string;
  cpf: string;
  perfil: 'ADMIN' | 'GERENTE' | 'FUNC';
  ativo: boolean;
}