import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CategoriaFormComponent } from './categoria-form';
import { CategoriaService } from '../../../services/categoria-equipamento';
import { ReactiveFormsModule } from '@angular/forms';
import { of } from 'rxjs';
import { provideRouter } from '@angular/router';

describe('CategoriaFormComponent', () => {
  let component: CategoriaFormComponent;
  let fixture: ComponentFixture<CategoriaFormComponent>;
  let serviceMock: any;

  beforeEach(async () => {
    serviceMock = { salvar: () => of({ id: 1, nome: 'Teste', ativo: true }) };

    await TestBed.configureTestingModule({
      imports: [CategoriaFormComponent, ReactiveFormsModule],
      providers: [
        { provide: CategoriaService, useValue: serviceMock },
        provideRouter([])
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(CategoriaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('deve validar nome com menos de 3 caracteres', () => {
    const nome = component.form.controls['nome'];
    nome.setValue('Ab');
    expect(nome.invalid).toBe(true);
  });

  it('deve iniciar com o status ativo como true', () => {
    expect(component.form.value.ativo).toBe(true);
  });
});