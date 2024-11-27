import { Calculation } from "./calculation.model"

export interface InvestmentCalculation {
    initialValue: number,
    months: number,
    cdi: number,
    calculations: Calculation[]
}