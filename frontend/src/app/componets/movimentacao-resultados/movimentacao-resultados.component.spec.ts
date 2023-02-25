import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovimentacaoResultadosComponent } from './movimentacao-resultados.component';

describe('MovimentacaoResultadosComponent', () => {
  let component: MovimentacaoResultadosComponent;
  let fixture: ComponentFixture<MovimentacaoResultadosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovimentacaoResultadosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovimentacaoResultadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
