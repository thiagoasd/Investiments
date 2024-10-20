using Investiments.Application.DTOs;

namespace Investiments.Application.Services
{
    public class CalculationAppService
    {

        public static CdbCalculation CalculateCDB(CdbCalculationRequest cdb, int months)
        {
            return new CdbCalculation();
        }

    }
}
