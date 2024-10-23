import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CdbCalculationRequest } from '../models/cdb-calculation-request.model';
import { Observable } from 'rxjs';
import { CdbCalculation } from '../models/cdb-calculation.model';

@Injectable({
  providedIn: 'root'
})
export class CalculationApiService {

  constructor(private http: HttpClient) { }

  getCdbCalculation(request: CdbCalculationRequest): Observable<CdbCalculation>{
    return this.http.post<CdbCalculation>('Api/cdb/', request);
  }
}
