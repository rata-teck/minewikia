import { TestBed } from '@angular/core/testing';

import { EliminarObjetoService } from './eliminar-objeto.service';

describe('EliminarObjetoService', () => {
  let service: EliminarObjetoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EliminarObjetoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
