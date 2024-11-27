using Investiments.Application.DTOs;

namespace Investiments.Application.Services
{
    public static class LCCalculator
    {
        public static Calculation Calculate(CalculationRequest request)
        {
            Calculation calculation = new()
            {
                BankTax = request.BankTax,
                CDI = request.CDI,
                InitialValue = request.InitialValue,
                InvestmentType = InvestmentType.LC
            };

            for (var month = 1; month <= request.Months; month++)
            {
                CalculateNextMonth(calculation, month);
            }

            return calculation;
        }

        private static void CalculateNextMonth(Calculation calculation, int month)
        {
            MonthlyCalculation? previousCalculation = calculation.GetValueByMonth(month - 1);


            MonthlyCalculation monthCalculation = new()
            {
                Month = month
            };

            if (previousCalculation == null)
            {
                monthCalculation.GrossValue = calculation.InitialValue * (1 + (calculation.CDI * calculation.BankTax));
            }
            else
            {
                monthCalculation.GrossValue = previousCalculation.GrossValue * (1 + (calculation.CDI * calculation.BankTax));
            }

            monthCalculation.TaxValue = 0;
            monthCalculation.LiquidValue = monthCalculation.GrossValue;

            calculation.Values.Add(monthCalculation);
        }
    }
}