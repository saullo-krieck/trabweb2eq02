import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, Validators, FormBuilder } from '@angular/forms';
import { CategoriaService } from '../../../services/categoria-equipamento';
import { Router } from '@angular/router';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-categoria-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './categoria-form.html',
  styleUrl: './categoria-form.css'
})
export class CategoriaFormComponent {
  private fb = inject(FormBuilder);
  private service = inject(CategoriaService);
  private router = inject(Router);

  form = this.fb.group({
    id: [null],
    nome: ['', [Validators.required, Validators.minLength(3)]],
    ativo: [true] // Garantindo o estado para Soft Delete
  });

  salvar() {
    if (this.form.valid) {
      this.service.salvar(this.form.value as any).subscribe({
        next: () => {
          alert('Categoria salva com sucesso!');
          this.router.navigate(['/categorias']);
        },
        error: (err) => console.error('Erro ao salvar categoria:', err)
      });
    }
  }
}