import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-mostrar-orcamento',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mostrar-orcamento.component.html',
  styleUrls: ['./mostrar-orcamento.component.css'],
})
export class MostrarOrcamentoComponent {
  mostrarModal = false;
  mensagemModal = '';

  aprovarServico() {
    this.mensagemModal = 'Serviço aprovado no Valor R$ 350,00';
    console.log('teste');
    this.mostrarModal = true;
  }

  rejeitarServico() {
    this.mensagemModal = 'Serviço Rejeitado';
    this.mostrarModal = true;
  }

  fecharModal() {
    this.mostrarModal = false;
    //colocar aqui depois o redirecionamento pra pagina inicial do cliente
  }
}
