import { Endereco } from "./endereco.model";

export interface Usuario {
    id?: number;
    nome: string;
    email: string;
    cpf: string;
    telefone: string;
    endereco: Endereco;
    perfil?: 'CLIENTE' | 'FUNCIONARIO';
}