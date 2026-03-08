import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RelatorioService {
  // url base
  url = 'http://localhost:8080/api/relatorios';

  constructor(private http: HttpClient) { }

  // RF019 - Relatorio de receitas por data
  gerarRelatorioReceitas(dataInicio: string, dataFim: string): Observable<Blob> {
    
    
    let urlCompleta = this.url + '/receitas?inicio=' + dataInicio + '&fim=' + dataFim;
    
    // arquivo (blob)
    return this.http.get(urlCompleta, { responseType: 'blob' });
  }

  // RF020 - Relatorio de receitas por categoria
  gerarRelatorioCategorias(): Observable<Blob> {
    
    // pdf sem parametros
    return this.http.get(this.url + '/categorias', { responseType: 'blob' });
  }
}