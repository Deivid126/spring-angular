import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovimentacaoEdicaoComponent } from './movimentacao-edicao.component';

describe('MovimentacaoEdicaoComponent', () => {
  let component: MovimentacaoEdicaoComponent;
  let fixture: ComponentFixture<MovimentacaoEdicaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovimentacaoEdicaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovimentacaoEdicaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
