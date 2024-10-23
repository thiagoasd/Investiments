import { TestBed } from '@angular/core/testing';

import { CdbCalculationService } from './cdb-calculation.service';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { provideHttpClient } from '@angular/common/http';

describe('CdbCalculationService', () => {
  let service: CdbCalculationService;

  beforeEach(() => {
    TestBed.configureTestingModule(
      {
        providers: [
        provideHttpClient(),
        provideHttpClientTesting() ]
    });
    service = TestBed.inject(CdbCalculationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
