import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MostrarOrcamentoComponent } from './mostrar-orcamento.component';

describe('MostrarOrcamentoComponent', () => {
  let component: MostrarOrcamentoComponent;
  let fixture: ComponentFixture<MostrarOrcamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MostrarOrcamentoComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MostrarOrcamentoComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('deve criar o componente', () => {
    expect(component).toBeTruthy();
  });

  it('deve iniciar com modal fechado', () => {
    expect(component.mostrarModal).toBe(false);
  });

  it('deve abrir o modal ao aprovar serviço', () => {
    component.aprovarServico();

    expect(component.mostrarModal).toBe(true);
    expect(component.mensagemModal).toBe('Serviço aprovado no Valor R$ 350,00');
  });

  it('deve abrir o modal ao rejeitar serviço', () => {
    component.rejeitarServico();

    expect(component.mostrarModal).toBe(true);
    expect(component.mensagemModal).toBe('Serviço Rejeitado');
  });

  it('deve fechar o modal', () => {
    component.aprovarServico();
    component.fecharModal();

    expect(component.mostrarModal).toBe(false);
  });
});