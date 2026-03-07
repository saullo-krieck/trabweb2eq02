import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CategoriaListComponent } from './categoria-list';
import { CategoriaService } from '../../../services/categoria-equipamento';
import { of } from 'rxjs';
import * as jasmine from 'jasmine';
import { provideRouter } from '@angular/router';

describe('CategoriaListComponent', () => {
  let component: CategoriaListComponent;
  let fixture: ComponentFixture<CategoriaListComponent>;
  let serviceMock: jasmine.SpyObj<CategoriaService>;

  beforeEach(async () => {
    // Criando o mock com métodos espiões
    serviceMock = jasmine.createSpyObj('CategoriaService', ['listar', 'excluir']);
    serviceMock.listar.and.returnValue(of([{ id: 1, nome: 'Eletrônicos', ativo: true }]));
    serviceMock.excluir.and.returnValue(of(void 0));

    await TestBed.configureTestingModule({
      imports: [CategoriaListComponent],
      providers: [
        { provide: CategoriaService, useValue: serviceMock },
        provideRouter([])
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(CategoriaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('deve listar as categorias ao carregar o componente', () => {
    expect(component.categorias.length).toBe(1);
    expect(component.categorias[0].nome).toBe('Eletrônicos');
    expect(serviceMock.listar).toHaveBeenCalled();
  });

  it('deve chamar o método excluir (soft delete) ao confirmar desativação', () => {
    spyOn(window, 'confirm').and.returnValue(true);
    
    component.desativar(1);
    
    expect(serviceMock.excluir).toHaveBeenCalledWith(1);
  });

  it('não deve chamar excluir se o usuário cancelar o confirm', () => {
    spyOn(window, 'confirm').and.returnValue(false);
    
    component.desativar(1);
    
    expect(serviceMock.excluir).not.toHaveBeenCalled();
  });
});