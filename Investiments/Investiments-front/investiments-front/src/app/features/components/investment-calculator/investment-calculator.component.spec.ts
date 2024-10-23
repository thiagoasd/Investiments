import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestmentCalculatorComponent } from './investment-calculator.component';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';

describe('InvestmentCalculatorComponent', () => {
  let component: InvestmentCalculatorComponent;
  let fixture: ComponentFixture<InvestmentCalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InvestmentCalculatorComponent],
      providers: [
        provideHttpClient(),
        provideHttpClientTesting() ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InvestmentCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(InvestmentCalculatorComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('#investment-calculator-title')?.textContent).toContain('Calculadora de Investimentos');
  });
});
