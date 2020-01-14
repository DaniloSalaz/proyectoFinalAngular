import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogCineComponent } from './dialog-cine.component';

describe('DialogCineComponent', () => {
  let component: DialogCineComponent;
  let fixture: ComponentFixture<DialogCineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogCineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogCineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
