import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateProtudosComponent } from './create-protudos.component';

describe('CreateProtudosComponent', () => {
  let component: CreateProtudosComponent;
  let fixture: ComponentFixture<CreateProtudosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateProtudosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateProtudosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
