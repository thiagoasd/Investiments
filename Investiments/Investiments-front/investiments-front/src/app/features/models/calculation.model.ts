import { InvestmentType } from "./Investment-calculation-request.model"

export interface Calculation {
    initialValue: number,
    bankTax: number,
    cdi: number,
    investmentType: InvestmentType,
    values: MonthlyCalculation[]
}

export interface MonthlyCalculation
{
    month: number, 
    grossValue: number,
    taxValue: number, 
    liquidValue: number,
    severity?: 'success' | 'secondary'
}