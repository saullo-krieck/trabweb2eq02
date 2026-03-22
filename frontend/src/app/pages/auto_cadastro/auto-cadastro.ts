import { CommonModule } from "@angular/common";
import { Component, inject } from "@angular/core";
import { FormBuilder, ReactiveFormsModule, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { NgxMaskDirective } from "ngx-mask";
import { AuthService } from "../../services/auth.service";
import { cpfValidator } from "../../shared/validators/cpf.validator";

@Component({
    selector: 'auto-cadastro',
    standalone: true,
    imports: [CommonModule, ReactiveFormsModule, NgxMaskDirective],
    templateUrl: './auto-cadastro.html',
    styleUrl: './auto-cadastro.css',
})
export class AutoCadastroComponent {
    private fb = inject(FormBuilder);
    private auth = inject(AuthService);
    private router = inject(Router);

    form = this.fb.group({
        nome: ['', [Validators.required, Validators.minLength(3)]],
        email: ['', [Validators.required, Validators.email]],
        cpf: ['', [Validators.required, cpfValidator]],
        telefone: ['', [Validators.required]],
        cep: ['', [Validators.required]],
        logradouro: ['', [Validators.required]],
        numero: ['', [Validators.required]],
        complemento: [''],
        bairro: ['', [Validators.required]],
        cidade: ['', [Validators.required]],
        uf: ['', [Validators.required]],
    });

    erro = '';
    sucesso = '';
    carregando = false;
    buscandoCep = false;

    buscarCep() {
        const cep = this.form.get('cep')?.value ?? '';
        if (cep.replace(/\D/g, '').length !== 8) return;
        this.buscandoCep = true;
        this.auth.buscarCep(cep).subscribe({
            next: (dados: any) => {
                if (dados.erro) {
                    this.form.get('cep')?.setErrors({ cepInvalido: true });
                } else {
                    this.form.patchValue({
                        logradouro: dados.logradouro,
                        bairro: dados.bairro,
                        cidade: dados.localidade,
                        uf: dados.uf,
                    });
                }
                this.buscandoCep = false;
            },
            error: () => {
                this.form.get('cep')?.setErrors({ cepInvalido: true });
                this.buscandoCep = false;
            }
        })
    }

    cadastrar() {
        if (this.form.invalid) return;
        this.carregando = true;
        this.erro = '';
        this.sucesso = '';
        const v = this.form.value;

        this.auth.cadastro({
            nome: v.nome,
            email: v.email,
            cpf: v.cpf,
            telefone: v.telefone,
            endereco: {
                cep: v.cep,
                logradouro: v.logradouro,
                numero: v.numero,
                complemento: v.complemento ?? '',
                bairro: v.bairro,
                cidade: v.cidade,
                uf: v.uf,
            }
        }).subscribe({
            next: (res) => {
                this.sucesso = res.message;
                this.carregando = false;
                setTimeout(() => this.router.navigate(['/login']), 3000);
            },
            error: (err) => {
                this.erro = err.error?.message ?? 'Erro ao cadastrar.';
                this.carregando = false;
            }
        });
    }

    voltar() {
        this.router.navigate(['/login']);
    }
}