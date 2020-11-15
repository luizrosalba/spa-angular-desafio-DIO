import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProventosComponent } from './proventos.component';

describe('ProventosComponent', () => {
  let component: ProventosComponent;
  let fixture: ComponentFixture<ProventosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProventosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProventosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
