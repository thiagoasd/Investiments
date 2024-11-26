import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CalculationService } from '../../services/calculation.service';
import { Calculation } from '../../models/calculation.model';
import { TableModule } from 'primeng/table';
import { InputNumberModule } from 'primeng/inputnumber';
import { FloatLabelModule } from 'primeng/floatlabel';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { InvestmentType } from '../../models/Investment-calculation-request.model';
import { InvestmentCalculation } from '../../models/investment-calculation.model';

@Component({
  selector: 'app-cdb-calculator',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule, TableModule, InputNumberModule, FloatLabelModule, ButtonModule, DropdownModule],
  templateUrl: './cdb-calculator.component.html',
  styleUrl: './cdb-calculator.component.scss'
})
export class CdbCalculatorComponent {

  constructor(private calculationService: CalculationService) { }
  cdbForm = new FormGroup({
    initialValue: new FormControl<number>(1000, Validators.min(0)),
    cdi: new FormControl<number>(0.9, Validators.min(0)),
    tb: new FormControl<number>(108, Validators.min(0)),
    months: new FormControl<number>(1, Validators.min(1))
  });

  calculation: InvestmentCalculation | undefined;
  investmentTypes: InvestmentType[] = [InvestmentType.CDB, InvestmentType.LC];
  
  disabledSubmit(): boolean {
    return !this.cdbForm.valid;
  }

  calculate() {
    // this.calculationService.calculate(
    //   <number> this.cdbForm.controls['initialValue'].value,
    //   <number> this.cdbForm.controls['cdi'].value,
    //   <number> this.cdbForm.controls['tb'].value,
    //   <number> this.cdbForm.controls['months'].value
    // ).subscribe(res => 
    //   {
    //     this.calculation = res;
    //   }
    // );
  }

}
