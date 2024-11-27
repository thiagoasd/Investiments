export interface investmentCalculationRequest {
    InitialValue: number,
    CDI: number,
    Months: number,
    Investments: { item1: number, item2: number}[]
}

export enum InvestmentType {
    CDB = 0,
    LC = 1
}