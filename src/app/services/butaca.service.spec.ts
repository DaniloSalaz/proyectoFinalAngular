import { TestBed } from '@angular/core/testing';

import { ButacaService } from './butaca.service';

describe('ButacaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ButacaService = TestBed.get(ButacaService);
    expect(service).toBeTruthy();
  });
});
