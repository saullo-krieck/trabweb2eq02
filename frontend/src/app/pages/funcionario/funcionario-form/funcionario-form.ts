import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, Validators, FormBuilder } from '@angular/forms';
import { FuncionarioService } from '../../../services/funcionario';
import { Router, ActivatedRoute } from '@angular/router';
import { cpfValidator } from '../../../shared/validators/cpf.validator';
import { NgxMaskDirective } from 'ngx-mask';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-funcionario-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, NgxMaskDirective, RouterLink],
  templateUrl: './funcionario-form.html',
  styleUrl: './funcionario-form.css'
})
export class FuncionarioFormComponent {
  private fb = inject(FormBuilder);
  private service = inject(FuncionarioService);
  private router = inject(Router);

  form = this.fb.group({
    id: [null],
    nome: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required, Validators.email]],
    cpf: ['', [Validators.required, cpfValidator]],
    telefone: ['', [Validators.required]],
    perfil: ['FUNC', [Validators.required]],
    ativo: [true]
  });

  salvar() {
    if (this.form.valid) {
      this.service.salvar(this.form.value as any).subscribe({
        next: () => {
          alert('Funcionário salvo com sucesso!');
          this.router.navigate(['/funcionarios']);
        },
        error: (err) => console.error('Erro ao salvar:', err)
      });
    }
  }
}