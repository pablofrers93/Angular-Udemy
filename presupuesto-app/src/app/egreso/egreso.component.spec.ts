import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EgresoComponent } from './egreso.component';

describe('EgresoComponent', () => {
  let component: EgresoComponent;
  let fixture: ComponentFixture<EgresoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EgresoComponent]
    });
    fixture = TestBed.createComponent(EgresoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
