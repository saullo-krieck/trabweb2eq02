import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FuncionarioService } from '../../../services/funcionario';
import { Funcionario } from '../../../shared/models/funcionario.model';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-funcionario-list',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './funcionario-list.html',
  styleUrl: './funcionario-list.css'
})
export class FuncionarioListComponent implements OnInit {
  private service = inject(FuncionarioService);
  funcionarios: Funcionario[] = [];

  ngOnInit() { this.listar(); }

  listar() {
    this.service.listarTodos().subscribe(data => this.funcionarios = data);
  }

  excluir(id: number) {
    if (confirm('Deseja realmente desativar este funcionário?')) {
      this.service.desativar(id).subscribe(() => this.listar());
    }
  }
}