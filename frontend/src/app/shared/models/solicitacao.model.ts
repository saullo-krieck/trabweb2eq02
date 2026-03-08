//rf016 - Finalizar solicitacao
export interface Solicitacao {
  id: number;
  descricaoEquipamento: string;
  categoria: string;
  defeito: string;
  estado: 'ABERTA' | 'ORÇADA' | 'REJEITADA' | 'APROVADA' | 'REDIRECIONADA' | 'ARRUMADA' | 'PAGA' | 'FINALIZADA'; 
  dataHoraCriacao: string;
  dataHoraFinalizacao: string;
  valorOrcamento: number;
  funcionarioId: number;
}
