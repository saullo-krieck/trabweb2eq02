import { CommonModule } from "@angular/common";
import { Component, inject, OnInit } from "@angular/core";
import { SolicitacaoService } from "../../services/solicitacao.service";
import { Router } from "@angular/router";
import { Solicitacao } from "../../shared/models/solicitacao.model";

@Component({
    selector: 'home-funcionario',
    standalone: true,
    imports: [CommonModule],
    templateUrl: 'home-funcionario.html',
    styleUrl: 'home-funcionario.css',
})
export class HomeFuncionarioComponent implements OnInit {
    private service = inject(SolicitacaoService);
    private router = inject(Router);

    solicitacoes: Solicitacao[] = [];
    erro = '';

    ngOnInit(): void {
        this.service.listarAbertas().subscribe({
            next: (lista) => this.solicitacoes = lista,
            error: () => this.erro = 'Erro ao carregar solicitações.'
        });
    }

    efetuarOrcamento(id: number) {
        this.router.navigate(['/orcamentos/efetuar'], { queryParams: { id } });
    }

    limitar(texto: string, limite = 30): string {
        return texto.length > limite ? texto.substring(0, limite) + '...' : texto;
    }
}