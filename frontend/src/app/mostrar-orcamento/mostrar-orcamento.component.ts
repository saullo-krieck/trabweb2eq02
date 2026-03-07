import { Component } from '@angular/core';

@Component({
  selector: 'app-mostrar-orcamento',
  standalone: true,
  templateUrl: './mostrar-orcamento.component.html',
  styleUrl: './mostrar-orcamento.component.css'
})
export class MostrarOrcamentoComponent {
  aprovarServico() {
    alert('Serviço Aprovado no Valor R$ 350,00');
  }

  rejeitarServico() {
    alert('Serviço Rejeitado');
  }
}