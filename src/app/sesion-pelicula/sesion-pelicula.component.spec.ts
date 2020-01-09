import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SesionPeliculaComponent } from './sesion-pelicula.component';

describe('SesionPeliculaComponent', () => {
  let component: SesionPeliculaComponent;
  let fixture: ComponentFixture<SesionPeliculaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SesionPeliculaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SesionPeliculaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
