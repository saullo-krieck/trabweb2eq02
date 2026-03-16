import { TestBed } from '@angular/core/testing';

import { EfetuarManutencaoService } from './efetuar-manutencao-service';

describe('EfetuarManutencaoService', () => {
  let service: EfetuarManutencaoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EfetuarManutencaoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
