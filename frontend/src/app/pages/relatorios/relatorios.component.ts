import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RelatorioService } from '../../services/relatorio.service';

@Component({
  selector: 'app-relatorios',
  standalone: true,
  imports: [FormsModule], //ngModel 
  templateUrl: './relatorios.component.html',
})
export class RelatoriosComponent {
  
  // datas do RF019
  dataInicio: string = '';
  dataFim: string = '';

  constructor(private relatorioService: RelatorioService) { }

  // Relatorio por Data
  
  baixarRelatorioReceitas() {
    if (this.dataInicio == '' || this.dataFim == '') {
      alert('Preencha a data de inicio e fim.');
      return;
    }

    this.relatorioService.gerarRelatorioReceitas(this.dataInicio, this.dataFim).subscribe({
      next: (arquivo) => {
        let url = window.URL.createObjectURL(arquivo);
        let a = document.createElement('a');
        a.href = url;
        a.download = 'receitas.pdf';
        a.click();
      },
      error: (err) => alert('Erro: Servidor backend desligado.')
    });
  }


  // Reltorio pora Categoria
  
  baixarRelatorioCategorias() {
    this.relatorioService.gerarRelatorioCategorias().subscribe({
      next: (arquivo) => {
        let url = window.URL.createObjectURL(arquivo);
        let a = document.createElement('a');
        a.href = url;
        a.download = 'categorias.pdf';
        a.click();
      },
      error: (err) => alert('Erro: Servidor backend desligado.')
    });
  }
}