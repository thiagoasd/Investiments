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
            
            for(var x = 1; x <= request.Months; x++)
            {
                CalculateNextMonth(calculation);
            }

            return calculation;
        }

        private static void CalculateNextMonth(CdbCalculation calculation)
        {
            decimal value;
            if (calculation.values.Count == 0)
            {
                value = calculation.InitialValue * (1 + (calculation.CDI * calculation.BankTax));
            } else
            {
                var calculationCount = calculation.values.Count;
                value = calculation.values[calculationCount - 1] * (1 + (calculation.CDI * calculation.BankTax));
            }

            calculation.values.Add(value);
        }
    }
}
