using Investiments.Application.DTOs;
using Investiments.Application.Services;
using Xunit;

namespace Investiments.Tests.Application.Services
{
    public class CalculationAppServiceShould
    {
        [Fact]
        public void ShouldCalculateCDB()
        {
            CdbCalculationRequest request = new()
            {
                BankTax = 1.08M,
                CDI = 0.9M,
                InitialValue = 1000,
                Months = 1
            };

            var result = CalculationAppService.CalculateCDB(request, 1);
            Assert.Equal(1001.00972M, result.values[0].Item2);

        }
    }
}
