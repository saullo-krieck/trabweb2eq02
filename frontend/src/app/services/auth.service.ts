import { inject, Injectable } from "@angular/core";
import { Usuario } from "../shared/models/usuario.model";
import { HttpClient } from "@angular/common/http";
import { Observable, tap } from "rxjs";

export interface LoginResponse {
    token: string;
    usuario: Usuario;
}

@Injectable({ providedIn: 'root' })
export class AuthService {
    private readonly API = 'http://localhost:8080/api/auth';
    private http = inject(HttpClient);

    login(email: string, senha: string): Observable<LoginResponse> {
        return this.http.post<LoginResponse>(`${this.API}/login`, { email, senha }).pipe(tap(res => {
            localStorage.setItem('token', res.token);
            localStorage.setItem('usuario', JSON.stringify(res.usuario));
        }))
    }

    cadastro(dados: any): Observable<{ message: string }> {
        return this.http.post<{ message: string }>(`${this.API}/cadastro`, dados);
    }

    logout(): void {
        localStorage.removeItem('token');
        localStorage.removeItem('usuario');
    }

    getToken(): string | null {
        return localStorage.getItem('token');
    }

    getUsuario(): Usuario | null {
        const u = localStorage.getItem('usuario');
        return u ? JSON.parse(u) : null;
    }

    isLoggedIn(): boolean {
        return !!this.getToken();
    }

    getPerfil(): string | null {
        return this.getUsuario()?.perfil ?? null;
    }

    buscarCep(cep: string): Observable<any> {
        const cepLimpo = cep.replace(/\D/g, '');
        return this.http.get(`https:viacep.com.br/ws/${cepLimpo}/json/`);
    }
}