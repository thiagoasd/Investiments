import { Injectable } from '@angular/core';
import { CalculationApiService } from './calculation-api.service';
import { map, Observable } from 'rxjs';
import { Calculation } from '../models/calculation.model';
import { InvestmentCalculation } from '../models/investment-calculation.model';
import { InvestmentType } from '../models/Investment-calculation-request.model';

@Injectable({
  providedIn: 'root'
})
export class CalculationService {

  constructor(private calculationApi: CalculationApiService) { }
  
  calculate(initialValue: number, cdi: number, months: number, investment1: [InvestmentType, number], investment2: [InvestmentType, number]): Observable<InvestmentCalculation>{
    return this.calculationApi.getInvestmentCalculation({
      InitialValue: initialValue,
      CDI: cdi / 100,
      Months: months,
      Investments: [{item1: investment1[0], item2: investment1[1]/100}, {item1: investment2[0], item2: investment2[1]/100}]
    }).pipe(map(x => this.mapSeverity(x)));
  }

  mapSeverity(investments: InvestmentCalculation): InvestmentCalculation{

    var investment0 = investments.calculations[0];
    var investment1 = investments.calculations[1];
    for (let index = 0; index < investments.months; index++) {
      if(investment0.values[index].liquidValue > investment1.values[index].liquidValue){
        investment0.values[index].severity = 'success';
      } else {
        investment1.values[index].severity = 'success';
      }
      
    }

    return investments
  }
}
