import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Funcionario } from '../shared/models/funcionario.model';

@Injectable({ providedIn: 'root' })
export class FuncionarioService {
  private readonly API = 'http://localhost:8080/api/funcionarios';

  constructor(private http: HttpClient) {}

  listarTodos(): Observable<Funcionario[]> {
    return this.http.get<Funcionario[]>(this.API);
  }
    
  buscarPorId(id: number): Observable<Funcionario> {
    return this.http.get<Funcionario>(`${this.API}/${id}`);
  }

  salvar(funcionario: Funcionario): Observable<Funcionario> {
    return this.http.post<Funcionario>(this.API, funcionario);
  }

  desativar(id: number): Observable<void> {
    return this.http.delete<void>(`${this.API}/${id}`);
  }
}