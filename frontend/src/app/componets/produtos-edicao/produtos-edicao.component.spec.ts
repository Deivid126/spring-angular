import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutosEdicaoComponent } from './produtos-edicao.component';

describe('ProdutosEdicaoComponent', () => {
  let component: ProdutosEdicaoComponent;
  let fixture: ComponentFixture<ProdutosEdicaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProdutosEdicaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdutosEdicaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
