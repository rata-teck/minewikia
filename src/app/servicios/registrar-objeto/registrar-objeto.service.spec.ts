import { TestBed } from '@angular/core/testing';

import { RegistrarObjetoService } from './registrar-objeto.service';

describe('RegistrarObjetoService', () => {
  let service: RegistrarObjetoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegistrarObjetoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
