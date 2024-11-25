using Investiments.Application.DTOs;

namespace Investiments.Application.Services
{
    public static class CalculationAppService
    {

        public static CdbCalculation CalculateCDB(CdbCalculationRequest cdb)
        {
            var calculation = CdbCalculator.Calculate(cdb);

            return calculation;
        }

    }
}
