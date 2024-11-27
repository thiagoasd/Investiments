import { Component } from '@angular/core';
import { InvestmentComparatorComponent } from './investment-comparator/investment-comparator.component';

@Component({
  selector: 'app-investment-calculator',
  standalone: true,
  imports: [InvestmentComparatorComponent],
  templateUrl: './investment-calculator.component.html',
  styleUrl: './investment-calculator.component.scss'
})
export class InvestmentCalculatorComponent {

}
