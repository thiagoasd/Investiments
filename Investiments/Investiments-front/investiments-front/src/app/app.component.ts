import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InvestmentCalculatorComponent } from './features/components/investment-calculator/investment-calculator.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, InvestmentCalculatorComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Calculadora de investimentos B3';
}
