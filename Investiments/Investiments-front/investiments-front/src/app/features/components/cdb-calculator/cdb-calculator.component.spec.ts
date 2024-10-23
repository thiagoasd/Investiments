import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';

import { CdbCalculatorComponent } from './cdb-calculator.component';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { provideHttpClient } from '@angular/common/http';
import { Input } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputNumberModule } from 'primeng/inputnumber';
import { TableModule } from 'primeng/table';

describe('CDBCALCULATORComponent', () => {
  let component: CdbCalculatorComponent;
  let fixture: ComponentFixture<CdbCalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CdbCalculatorComponent, FormsModule, ReactiveFormsModule, CommonModule, TableModule, InputNumberModule, FloatLabelModule, ButtonModule],
      providers: [
        provideHttpClient(),
        provideHttpClientTesting() ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CdbCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(CdbCalculatorComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('#cdb-calculator-title')?.textContent).toContain('CDB');
  });

  it('should render inputs', () => {
    const fixture = TestBed.createComponent(CdbCalculatorComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;

    expect((compiled.querySelector('#CDB-initial-value') as HTMLInputElement).value).toBe("R$ 1.000,00");
    expect((compiled.querySelector('#CDB-cdi') as HTMLInputElement).value).toBe('0,9%');
    expect((compiled.querySelector('#CDB-tb') as HTMLInputElement).value).toBe('108%');
    expect((compiled.querySelector('#CDB-months') as HTMLInputElement).value).toBe('1');
  });

  it('should not render errors if inputs are correct', () => {
    const fixture = TestBed.createComponent(CdbCalculatorComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;

    expect(compiled.querySelector('#errorMessage-initialValue')).toBeNull();
    expect(compiled.querySelector('#errorMessage-cdi')).toBeNull();
    expect(compiled.querySelector('#errorMessage-tb')).toBeNull();
    expect(compiled.querySelector('#errorMessage-months')).toBeNull();
  });

  it('should not render errors if inputs are correct', () => {
    const fixture = TestBed.createComponent(CdbCalculatorComponent);
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;

    expect(compiled.querySelector('#errorMessage-initialValue')).toBeNull();
    expect(compiled.querySelector('#errorMessage-cdi')).toBeNull();
    expect(compiled.querySelector('#errorMessage-tb')).toBeNull();
    expect(compiled.querySelector('#errorMessage-months')).toBeNull();
  });

  it('should render initial value error if input is incorrect', fakeAsync(() => {
    const fixture = TestBed.createComponent(CdbCalculatorComponent);
    component = fixture.componentInstance;
    
    fixture.detectChanges();

    component.cdbForm.controls.initialValue?.setValue(-50, {emitEvent: true});

    tick();
    fixture.detectChanges();

    fixture.whenStable().then(() => {
      component = fixture.componentInstance;
      expect(component.cdbForm.valid).toBeFalse();

      const compiled = fixture.nativeElement as HTMLElement;
      expect(compiled.querySelector('#errorMessage-initialValue')?.textContent).toContain("Valor inicial deve ser positivo");
    });
  }));

  it('should render cdi value error if input is incorrect', fakeAsync(() => {
    const fixture = TestBed.createComponent(CdbCalculatorComponent);
    component = fixture.componentInstance;
    
    fixture.detectChanges();

    component.cdbForm.controls.cdi?.setValue(-5, {emitEvent: true});

    tick();
    fixture.detectChanges();

    fixture.whenStable().then(() => {
      component = fixture.componentInstance;
      expect(component.cdbForm.valid).toBeFalse();

      const compiled = fixture.nativeElement as HTMLElement;
      expect(compiled.querySelector('#errorMessage-cdi')?.textContent).toContain("CDI deve ser positivo");
    });
  }));

  it('should render tb value error if input is incorrect', fakeAsync(() => {
    const fixture = TestBed.createComponent(CdbCalculatorComponent);
    component = fixture.componentInstance;
    
    fixture.detectChanges();

    component.cdbForm.controls.tb?.setValue(-10, {emitEvent: true});

    tick();
    fixture.detectChanges();

    fixture.whenStable().then(() => {
      component = fixture.componentInstance;
      expect(component.cdbForm.valid).toBeFalse();

      const compiled = fixture.nativeElement as HTMLElement;
      expect(compiled.querySelector('#errorMessage-tb')?.textContent).toContain("Taxa do banco deve ser positivo");
    });
  }));

  it('should render months value error if input is incorrect', fakeAsync(() => {
    const fixture = TestBed.createComponent(CdbCalculatorComponent);
    component = fixture.componentInstance;
    
    fixture.detectChanges();

    component.cdbForm.controls.months?.setValue(-1, {emitEvent: true});

    tick();
    fixture.detectChanges();

    fixture.whenStable().then(() => {
      component = fixture.componentInstance;
      expect(component.cdbForm.valid).toBeFalse();

      const compiled = fixture.nativeElement as HTMLElement;
      expect(compiled.querySelector('#errorMessage-months')?.textContent).toContain("Quantidade de meses deve ser maior que 1");
    });
  }));

});
