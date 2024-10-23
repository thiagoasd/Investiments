import { Injectable } from '@angular/core';
import { CalculationApiService } from './calculation-api.service';
import { Observable } from 'rxjs';
import { CdbCalculation } from '../models/cdb-calculation.model';

@Injectable({
  providedIn: 'root'
})
export class CdbCalculationService {

  constructor(private calculationApi: CalculationApiService) { }
  
  calculate(initialValue: number, cdi: number, tb: number, months: number): Observable<CdbCalculation>{
    return this.calculationApi.getCdbCalculation({
      InitialValue: initialValue,
      BankTax: tb / 100,
      CDI: cdi / 100,
      Months: months
    });
  }
}
