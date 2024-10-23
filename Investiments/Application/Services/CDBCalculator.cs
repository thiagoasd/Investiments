using Investiments.Application.DTOs;
using Newtonsoft.Json.Linq;

namespace Investiments.Application.Services
{
    public static class CdbCalculator
    {

        public static CdbCalculation Calculate(CdbCalculationRequest request)
        {
            CdbCalculation calculation = new()
            {
                BankTax = request.BankTax,
                CDI = request.CDI,
                InitialValue = request.InitialValue
            };
            
            for(var month = 1; month <= request.Months; month++)
            {
                CalculateNextMonth(calculation, month);
            }

            return calculation;
        }

        private static void CalculateNextMonth(CdbCalculation calculation, int month)
        {
            MonthlyCalculation? previousCalculation = calculation.GetValueByMonth(month - 1);


            MonthlyCalculation monthCalculation = new()
            {
                Month = month
            };

            if (previousCalculation == null)
            {
                monthCalculation.GrossValue = calculation.InitialValue * (1 + (calculation.CDI * calculation.BankTax));
            } else
            {
                monthCalculation.GrossValue = previousCalculation.GrossValue * (1 + (calculation.CDI * calculation.BankTax));
            }

            CalculateTaxValue(monthCalculation, calculation.InitialValue);
            CalculateLiquidValue(monthCalculation);

            calculation.Values.Add(monthCalculation);
        }

        private static void CalculateTaxValue(MonthlyCalculation calculation, decimal initialValue)
        {
            decimal taxPercent = GetTaxPercent(calculation.Month);
            calculation.TaxValue =  taxPercent * (calculation.GrossValue - initialValue);
        }
        private static void CalculateLiquidValue(MonthlyCalculation calculation)
        {
            calculation.LiquidValue = calculation.GrossValue - calculation.TaxValue;
        }

        private static decimal GetTaxPercent(int month)
        {
            if (month > 24)
            {
                return 0.15m;
            }
            else if(month > 12)
            {
                return 0.175m;
            }
            else if(month > 6)
            {
                return 0.2m;
            } else
            {
                return 0.225m;
            }
        }
    }
}
