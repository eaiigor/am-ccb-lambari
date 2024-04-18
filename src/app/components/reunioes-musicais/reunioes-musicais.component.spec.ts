import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReunioesMusicaisComponent } from './reunioes-musicais.component';

describe('ReunioesMusicaisComponent', () => {
  let component: ReunioesMusicaisComponent;
  let fixture: ComponentFixture<ReunioesMusicaisComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReunioesMusicaisComponent]
    });
    fixture = TestBed.createComponent(ReunioesMusicaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
