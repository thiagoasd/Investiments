using Investiments.Application.DTOs;

namespace Investiments.Application.Services
{
    public static class CalculationAppService
    {

        public static CdbCalculation CalculateCDB(CdbCalculationRequest cdb)
        {
            var calculation = CdbCalculator.Calculate(cdb);
            using (var context = new CalculationDbContext())
            {
                context.Add(cdb);
            }

            return calculation;
        }

    }
}
