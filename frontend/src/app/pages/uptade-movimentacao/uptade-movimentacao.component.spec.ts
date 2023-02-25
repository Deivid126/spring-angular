import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UptadeMovimentacaoComponent } from './uptade-movimentacao.component';

describe('UptadeMovimentacaoComponent', () => {
  let component: UptadeMovimentacaoComponent;
  let fixture: ComponentFixture<UptadeMovimentacaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UptadeMovimentacaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UptadeMovimentacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
