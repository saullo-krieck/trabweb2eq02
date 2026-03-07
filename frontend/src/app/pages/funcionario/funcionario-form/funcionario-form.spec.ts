import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FuncionarioFormComponent } from './funcionario-form';
import { FuncionarioService } from '../../../services/funcionario';
import { ReactiveFormsModule } from '@angular/forms';
import { of } from 'rxjs';
import { provideRouter } from '@angular/router';
import { provideNgxMask } from 'ngx-mask';

describe('FuncionarioFormComponent', () => {
  let component: FuncionarioFormComponent;
  let fixture: ComponentFixture<FuncionarioFormComponent>;
  let serviceMock: any;

  beforeEach(async () => {
    serviceMock = { salvar: () => of({}) };

    await TestBed.configureTestingModule({
      imports: [FuncionarioFormComponent, ReactiveFormsModule],
      providers: [
        { provide: FuncionarioService, useValue: serviceMock },
        provideRouter([]),
        provideNgxMask()
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(FuncionarioFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('deve iniciar o formulário como inválido', () => {
    expect(component.form.invalid).toBe(true);
  });

  it('deve validar CPF incorreto', () => {
    const cpf = component.form.controls['cpf'];
    cpf.setValue('11111111111'); 
    expect(cpf.errors?.['cpfInvalido']).toBe(true);
  });
});