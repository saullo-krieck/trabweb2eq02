import { Component, ChangeDetectionStrategy, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Solicitacao } from '../../../shared/models/solicitacao.model'; 

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './visualizar-servico.html',
  styleUrl: './visualizar-servico.css'
})

export class VisualizarServico {
  // Dados simulados baseados na model Solicitacao
  solicitacao = signal<Solicitacao>({
    id: 14592,
    descricaoEquipamento: 'MacBook Pro M1 2020',
    categoria: 'Informática / Laptops',
    defeito: 'Teclado falhando e bateria viciada.',
    estado: 'ORÇADA',
    dataHoraCriacao: '2026-03-20T14:30:00Z',
    dataHoraFinalizacao: '',
    valorOrcamento: 1250.00,
    funcionarioId: 402,
    clienteId: 1,
    nomeCliente: 'João Silva'
  });

  statusBadgeClass = computed(() => {
    return this.solicitacao().estado === 'ORÇADA'
      ? 'px-3 py-1 rounded-full text-sm font-semibold border bg-green-100 text-green-800 border-green-200'
      : 'px-3 py-1 rounded-full text-sm font-semibold border bg-red-100 text-red-800 border-red-200';
  });
}