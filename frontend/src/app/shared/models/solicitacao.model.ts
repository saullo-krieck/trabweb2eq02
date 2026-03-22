//rf016 - Finalizar solicitacao
export interface Solicitacao {
  id: number;
  clienteId: number;
  nomeCliente: string;
  descricaoEquipamento: string;
  categoria: string;
  defeito: string;
  estado: 'ABERTA' | 'ORÇADA' | 'REJEITADA' | 'APROVADA' | 'REDIRECIONADA' | 'ARRUMADA' | 'PAGA' | 'FINALIZADA';
  dataHoraCriacao: string;
  dataHoraFinalizacao: string | null;
  valorOrcamento: number | null;
  funcionarioId: number | null;
}
