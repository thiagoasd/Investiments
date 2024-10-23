import { TestBed } from '@angular/core/testing';

import { CalculationApiService } from './calculation-api.service';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';

describe('CalculationApiService', () => {
  let service: CalculationApiService;

  beforeEach(() => {
    TestBed.configureTestingModule(
      {
        providers: [
        provideHttpClient(),
        provideHttpClientTesting() ]
    });
    service = TestBed.inject(CalculationApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
