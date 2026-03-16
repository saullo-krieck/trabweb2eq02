import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarSolicitacoesComponent } from './listar-solicitacoes-component';

describe('ListarSolicitacoesComponent', () => {
  let component: ListarSolicitacoesComponent;
  let fixture: ComponentFixture<ListarSolicitacoesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListarSolicitacoesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ListarSolicitacoesComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
