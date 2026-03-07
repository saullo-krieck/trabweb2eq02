import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FuncionarioListComponent } from './funcionario-list';
import { FuncionarioService } from '../../../services/funcionario';
import { of } from 'rxjs';
import { provideRouter } from '@angular/router';

describe('FuncionarioListComponent', () => {
  let component: FuncionarioListComponent;
  let fixture: ComponentFixture<FuncionarioListComponent>;
  let serviceMock: any;

  beforeEach(async () => {
    serviceMock = {
      listarTodos: () => of([
        { id: 1, nome: 'Henrique', email: 'h@test.com', cpf: '123', perfil: 'ADMIN', ativo: true }
      ]),
      desativar: (id: number) => of(void 0)
    };

    await TestBed.configureTestingModule({
      imports: [FuncionarioListComponent],
      providers: [
        { provide: FuncionarioService, useValue: serviceMock },
        provideRouter([])
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(FuncionarioListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('deve carregar a lista de funcionários ao iniciar', () => {
    expect(component.funcionarios.length).toBe(1);
    expect(component.funcionarios[0].nome).toBe('Henrique');
  });
});