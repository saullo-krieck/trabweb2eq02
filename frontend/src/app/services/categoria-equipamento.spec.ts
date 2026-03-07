import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { CategoriaService } from './categoria-equipamento';
import { Categoria } from '../shared/models/categoria-equipamento.model';

describe('CategoriaService', () => {
  let service: CategoriaService;
  let httpMock: HttpTestingController;
  const API = 'http://localhost:8080/api/categorias';

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CategoriaService]
    });
    service = TestBed.inject(CategoriaService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('deve buscar todas as categorias (GET)', () => {
    const mockCategorias: Categoria[] = [{ id: 1, nome: 'Teste', ativo: true }];
    service.listarAtivas().subscribe(data => expect(data.length).toBe(1));
    const req = httpMock.expectOne(API);
    expect(req.request.method).toBe('GET');
    req.flush(mockCategorias);
  });

  it('deve salvar nova categoria (POST)', () => {
    const nova: Categoria = { nome: 'Nova', ativo: true };
    service.salvar(nova).subscribe();
    const req = httpMock.expectOne(API);
    expect(req.request.method).toBe('POST');
    req.flush(nova);
  });

  afterEach(() => httpMock.verify());
});