import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UptadeProdutosComponent } from './uptade-produtos.component';

describe('UptadeProdutosComponent', () => {
  let component: UptadeProdutosComponent;
  let fixture: ComponentFixture<UptadeProdutosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UptadeProdutosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UptadeProdutosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
