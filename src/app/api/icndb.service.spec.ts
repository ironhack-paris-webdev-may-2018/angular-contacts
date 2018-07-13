import { TestBed, inject } from '@angular/core/testing';

import { IcndbService } from './icndb.service';

describe('IcndbService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IcndbService]
    });
  });

  it('should be created', inject([IcndbService], (service: IcndbService) => {
    expect(service).toBeTruthy();
  }));
});
