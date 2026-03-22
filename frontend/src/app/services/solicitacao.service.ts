import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, ObservedValuesFromArray } from 'rxjs';
import { Solicitacao } from '../shared/models/solicitacao.model';

@Injectable({
  providedIn: 'root'
})
export class SolicitacaoService {

  url = 'http://localhost:8080/api/solicitacoes';

  constructor(private http: HttpClient) { }
  // RF016 - Finalizar Solicitacao do cliente

  finalizarSolicitacao(idSol: number, idFunc: number): Observable<any> {

    // IDs sao validos 
    if (idSol == null || idSol <= 0) {
      throw new Error('ID da solicitacao invalido');
    }

    if (idFunc == null || idFunc <= 0) {
      throw new Error('ID do funcionario invalido');
    }

    // Pega a data de hoje para salvar no historico
    let dataHoje = new Date();
    let dataFim = dataHoje.toISOString();

    // backend
    let dados = {
      funcionarioId: idFunc,
      dataHoraFinalizacao: dataFim,
      estado: 'FINALIZADA'
    };

    // Monta a URL 
    let urlCompleta = this.url + '/' + idSol + '/finalizar';

    console.log('Enviando: ' + urlCompleta);

    // requisicao HTTP 
    return this.http.patch<any>(urlCompleta, dados);
  }

  listarAbertas(): Observable<Solicitacao[]> {
    return this.http.get<Solicitacao[]>(`${this.url}?estado=ABERTA`);
  }
}