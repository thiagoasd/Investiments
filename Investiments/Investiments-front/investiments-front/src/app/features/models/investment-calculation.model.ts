import { Calculation } from "./calculation.model"

export interface InvestmentCalculation {
    initialValue: number,
    bankTax: number,
    cdi: number,
    calculations: Calculation[]
}