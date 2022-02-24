import { TestBed } from '@angular/core/testing';

import { PetsaloneService } from './petsalone.service';

describe('PetsaloneService', () => {
  let service: PetsaloneService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PetsaloneService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
