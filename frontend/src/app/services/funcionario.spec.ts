import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http'; // Importante
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { FuncionarioService } from './funcionario'; 

describe('FuncionarioService', () => {
  let service: FuncionarioService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        FuncionarioService,
        provideHttpClient(),
        provideHttpClientTesting()
      ]
    });
    service = TestBed.inject(FuncionarioService);   
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});