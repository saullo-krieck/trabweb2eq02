import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Efetuarorcamento } from './efetuarorcamento';

describe('Efetuarorcamento', () => {
  let component: Efetuarorcamento;
  let fixture: ComponentFixture<Efetuarorcamento>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Efetuarorcamento],
    }).compileComponents();

    fixture = TestBed.createComponent(Efetuarorcamento);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
