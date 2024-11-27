import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestmentComparatorComponent } from './investment-comparator.component';

describe('InvestmentComparatorComponent', () => {
  let component: InvestmentComparatorComponent;
  let fixture: ComponentFixture<InvestmentComparatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InvestmentComparatorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InvestmentComparatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
