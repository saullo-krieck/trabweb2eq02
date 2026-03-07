import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitacaoManutencao } from './solicitacao-manutencao';

describe('SolicitacaoManutencao', () => {
  let component: SolicitacaoManutencao;
  let fixture: ComponentFixture<SolicitacaoManutencao>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SolicitacaoManutencao],
    }).compileComponents();

    fixture = TestBed.createComponent(SolicitacaoManutencao);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
