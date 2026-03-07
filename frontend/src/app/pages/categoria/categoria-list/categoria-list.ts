import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriaService } from '../../../services/categoria-equipamento';
import { Categoria } from '../../../shared/models/categoria-equipamento.model';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-categoria-list',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './categoria-list.html',
  styleUrl: './categoria-list.css'
})
export class CategoriaListComponent implements OnInit {
  private service = inject(CategoriaService);
  categorias: Categoria[] = [];

  ngOnInit() { this.listar(); }

  listar() {
    this.service.listarAtivas().subscribe(data => this.categorias = data);
  }

  desativar(id: number) {
    if (confirm('Deseja realmente desativar esta categoria?')) {
      this.service.desativar(id).subscribe(() => this.listar());
    }
  }
}