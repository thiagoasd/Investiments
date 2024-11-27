import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputNumberModule } from 'primeng/inputnumber';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { CalculationService } from '../../../services/calculation.service';
import { InvestmentCalculation } from '../../../models/investment-calculation.model';
import { InvestmentType } from '../../../models/Investment-calculation-request.model';
import { DropdownModule } from 'primeng/dropdown';

@Component({
  selector: 'app-investment-comparator',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule, TableModule, InputNumberModule, FloatLabelModule, ButtonModule, DropdownModule, TagModule],
  templateUrl: './investment-comparator.component.html',
  styleUrl: './investment-comparator.component.scss'
})
export class InvestmentComparatorComponent {

  constructor(private calculationService: CalculationService) { }

  calculation: InvestmentCalculation | undefined;

  cdbForm = new FormGroup({
    initialValue: new FormControl<number>(1000, Validators.min(0)),
    cdi: new FormControl<number>(0.9, Validators.min(0)),
    it1: new FormControl<InvestmentType>(InvestmentType.CDB),
    it2: new FormControl<InvestmentType>(InvestmentType.CDB),
    tb1: new FormControl<number>(100, Validators.min(0)),
    tb2: new FormControl<number>(100, Validators.min(0)),
    months: new FormControl<number>(1, Validators.min(1))
  });

  investmentTypes = [{ label: "CDB",
                        value: InvestmentType.CDB
                      },{ label: "LC",
                        value: InvestmentType.LC
                      }];

  disabledSubmit(): boolean {
    return !this.cdbForm.valid;
  }

  calculate() {
    let investment1: [InvestmentType, number] = [<InvestmentType> this.cdbForm.controls['it1'].value, <number> this.cdbForm.controls['tb1'].value];
    let investment2: [InvestmentType, number] = [<InvestmentType> this.cdbForm.controls['it2'].value, <number> this.cdbForm.controls['tb2'].value];

    this.calculationService.calculate(
      <number> this.cdbForm.controls['initialValue'].value,
      <number> this.cdbForm.controls['cdi'].value,
      <number> this.cdbForm.controls['months'].value,
      investment1,
      investment2
    ).subscribe(res => 
      {
        this.calculation = res;
      }
    );
  }
}
