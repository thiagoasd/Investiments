using Investiments.Application.DTOs;

namespace Investiments.Application.Services
{
    public static class CalculationAppService
    {

        public static CdbCalculation CalculateCDB(CdbCalculationRequest cdb)
        {
            return CdbCalculator.Calculate(cdb);
        }

    }
}
