import { TestBed } from '@angular/core/testing';

import { RedirecionarManutencaoService } from './redirecionar-manutencao-service';

describe('RedirecionarManutencaoService', () => {
  let service: RedirecionarManutencaoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RedirecionarManutencaoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
