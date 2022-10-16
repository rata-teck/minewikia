import { TestBed } from '@angular/core/testing';

import { ObtenerObjetoService } from './obtener-objeto.service';

describe('ObtenerObjetoService', () => {
  let service: ObtenerObjetoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ObtenerObjetoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
