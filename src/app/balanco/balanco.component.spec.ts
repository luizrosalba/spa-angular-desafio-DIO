import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BalancoComponent } from './balanco.component';

describe('BalancoComponent', () => {
  let component: BalancoComponent;
  let fixture: ComponentFixture<BalancoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BalancoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BalancoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
