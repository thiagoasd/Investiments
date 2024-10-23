import { Component } from '@angular/core';
import { CdbCalculatorComponent } from '../cdb-calculator/cdb-calculator.component';

@Component({
  selector: 'app-investment-calculator',
  standalone: true,
  imports: [CdbCalculatorComponent],
  templateUrl: './investment-calculator.component.html',
  styleUrl: './investment-calculator.component.scss'
})
export class InvestmentCalculatorComponent {

}
