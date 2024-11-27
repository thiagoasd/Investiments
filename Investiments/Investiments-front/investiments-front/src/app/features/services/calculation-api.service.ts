import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CalculationRequest } from '../models/calculation-request.model';
import { Observable } from 'rxjs';
import { Calculation } from '../models/calculation.model';
import { InvestmentCalculation } from '../models/investment-calculation.model';
import { investmentCalculationRequest } from '../models/Investment-calculation-request.model';

@Injectable({
  providedIn: 'root'
})
export class CalculationApiService {

  constructor(private http: HttpClient) { }

  getInvestmentCalculation(request: investmentCalculationRequest): Observable<InvestmentCalculation>{
    return this.http.post<InvestmentCalculation>('https://investmentsapp-fng8h9c9ezbqb8h8.brazilsouth-01.azurewebsites.net/cdb/GetCalculation', request);
  }
}
