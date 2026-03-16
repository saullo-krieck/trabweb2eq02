import { Component } from '@angular/core';

@Component({
  selector: 'app-pagar-servico',
  imports: [],
  templateUrl: './pagar-servico.html',
  styleUrl: './pagar-servico.css',
})
export class PagarServico {
  confirmarPagamento() {
    const dataHoraPagamento = new Date();
    console.log('Pagamento confirmado em:', dataHoraPagamento);
    // Aqui você pode adicionar a lógica para registrar o pagamento no sistema
  }
}
