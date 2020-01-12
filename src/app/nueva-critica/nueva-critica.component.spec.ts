import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevaCriticaComponent } from './nueva-critica.component';

describe('NuevaCriticaComponent', () => {
  let component: NuevaCriticaComponent;
  let fixture: ComponentFixture<NuevaCriticaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NuevaCriticaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevaCriticaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
