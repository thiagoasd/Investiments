export interface CdbCalculation {
    initialValue: number,
    bankTax: number,
    cdi: number,
    values: MonthlyCalculation[]
}

export interface MonthlyCalculation
{
    month: number, 
    grossValue: number,
    taxValue: number, 
    liquidValue: number
}