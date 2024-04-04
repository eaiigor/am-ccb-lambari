import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalhesLocalidadeComponent } from './detalhes-localidade.component';

describe('DetalhesLocalidadeComponent', () => {
  let component: DetalhesLocalidadeComponent;
  let fixture: ComponentFixture<DetalhesLocalidadeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetalhesLocalidadeComponent]
    });
    fixture = TestBed.createComponent(DetalhesLocalidadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
