import { CommonModule } from "@angular/common";
import { Component, inject } from "@angular/core";
import { FormBuilder, ReactiveFormsModule, Validators } from "@angular/forms";
import { Router, RouterLink } from "@angular/router";
import { AuthService } from "../../services/auth.service";

@Component({
    selector: 'app-login',
    standalone: true,
    imports: [CommonModule, ReactiveFormsModule, RouterLink],
    templateUrl: './login.html',
    styleUrl: './login.css'
})
export class LoginComponent {
    private fb = inject(FormBuilder);
    private auth = inject(AuthService);
    private router = inject(Router);

    form = this.fb.group({
        email: ['', [Validators.required, Validators.email]],
        senha: ['', [Validators.required]],
    });

    erro = '';
    carregando = false;

    entrar() {
        if (this.form.invalid) return;
        this.carregando = true;
        this.erro = '';
        const { email, senha } = this.form.value;

        this.auth.login(email!, senha!).subscribe({
            next: (res) => {
                if (res.usuario.perfil === 'FUNCIONARIO') {
                    this.router.navigate(['/funcionarios']);
                } else {
                    this.router.navigate(['/solicitacao-manutencao']);
                }
            },
            error: (err) => {
                this.erro = err.error?.message ?? 'Erro ao fazer login';
                this.carregando = false;
            }
        })
    }

}