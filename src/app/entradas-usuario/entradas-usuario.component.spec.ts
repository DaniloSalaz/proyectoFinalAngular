import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntradasUsuarioComponent } from './entradas-usuario.component';

describe('EntradasUsuarioComponent', () => {
  let component: EntradasUsuarioComponent;
  let fixture: ComponentFixture<EntradasUsuarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntradasUsuarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntradasUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
