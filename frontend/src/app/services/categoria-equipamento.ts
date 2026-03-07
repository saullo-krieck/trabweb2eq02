import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Categoria } from '../shared/models/categoria-equipamento.model';

@Injectable({ providedIn: 'root' })
export class CategoriaService {
  private readonly API = 'http://localhost:8080/api/categorias';
  private http = inject(HttpClient);

  listarAtivas(): Observable<Categoria[]> {
    return this.http.get<Categoria[]>(`${this.API}?ativo=true`);
  }

  buscarPorId(id: number): Observable<Categoria> {
    return this.http.get<Categoria>(`${this.API}/${id}`);
  }

  salvar(categoria: Categoria): Observable<Categoria> {
    if (categoria.id) {
      return this.http.put<Categoria>(`${this.API}/${categoria.id}`, categoria);
    }
    return this.http.post<Categoria>(this.API, categoria);
  }

  desativar(id: number): Observable<void> {
    return this.http.delete<void>(`${this.API}/${id}`); 
    // Nota: No seu Back-end Spring, o @DeleteMapping deve apenas setar ativo = false
  }
}