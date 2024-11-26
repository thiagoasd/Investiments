using Investiments.Application.DTOs;
using Investiments.Application.Services;
using Xunit;

namespace Investiments.Tests.Application.Services
{
    public class CalculationAppServiceShould
    {
        [Fact]
        public void ShouldCalculateCDBGrossValue()
        {
            CalculationRequest request = new()
            {
                BankTax = 1.08M,
                CDI = 0.009M,
                InitialValue = 1000,
                Months = 1
            };

            var result = CalculationAppService.CalculateCDB(request);
            var monthResult = result.GetValueByMonth(request.Months);

            if (monthResult is not null)
            {
                Assert.Equal(1009.720M, monthResult.GrossValue);
            }
            else
            {
                Assert.NotNull(monthResult);
            }
        }

        [Fact]
        public void ShouldCalculateCDBLiquidValue()
        {
            CalculationRequest request = new()
            {
                BankTax = 1.08M,
                CDI = 0.009M,
                InitialValue = 1000,
                Months = 1
            };

            var result = CalculationAppService.CalculateCDB(request);
            var monthResult = result.GetValueByMonth(request.Months);
            if (monthResult is not null)
            {
                Assert.Equal(1007.53300M, monthResult.LiquidValue);
            } else
            {
                Assert.NotNull(monthResult);
            }
        }

        [Fact]
        public void ShouldCalculateCDBValuesFor7Months()
        {
            CalculationRequest request = new()
            {
                BankTax = 1.08M,
                CDI = 0.009M,
                InitialValue = 1000,
                Months = 7
            };

            var result = CalculationAppService.CalculateCDB(request);
            var monthResult = result.GetValueByMonth(request.Months);
            if (monthResult is not null)
            {
                Assert.Equal(1070.05650M, Math.Round(monthResult.GrossValue, 5));
                Assert.Equal(1056.04520M, Math.Round(monthResult.LiquidValue, 5));
            }
            else
            {
                Assert.NotNull(monthResult);
            }
        }

        [Fact]
        public void ShouldCalculateCDBValuesFor10Months()
        {
            CalculationRequest request = new()
            {
                BankTax = 1.08M,
                CDI = 0.009M,
                InitialValue = 1000,
                Months = 10
            };

            var result = CalculationAppService.CalculateCDB(request);
            var monthResult = result.GetValueByMonth(request.Months);
            if (monthResult is not null)
            {
                Assert.Equal(1101.56362M, Math.Round(monthResult.GrossValue, 5));
                Assert.Equal(1081.25090M, Math.Round(monthResult.LiquidValue, 5));
            }
            else
            {
                Assert.NotNull(monthResult);
            }
        }

        [Fact]
        public void ShouldCalculateCDBValuesFor12Months()
        {
            CalculationRequest request = new()
            {
                BankTax = 1.08M,
                CDI = 0.009M,
                InitialValue = 1000,
                Months = 12
            };

            var result = CalculationAppService.CalculateCDB(request);
            var monthResult = result.GetValueByMonth(request.Months);
            if (monthResult is not null)
            {
                Assert.Equal(1123.08209M, Math.Round(monthResult.GrossValue, 5));
                Assert.Equal(1098.46568M, Math.Round(monthResult.LiquidValue, 5));
            }
            else
            {
                Assert.NotNull(monthResult);
            }
        }

        [Fact]
        public void ShouldCalculateCDBValuesFor13Months()
        {
            CalculationRequest request = new()
            {
                BankTax = 1.08M,
                CDI = 0.009M,
                InitialValue = 1000,
                Months = 13
            };

            var result = CalculationAppService.CalculateCDB(request);
            var monthResult = result.GetValueByMonth(request.Months);
            if (monthResult is not null)
            {
                Assert.Equal(1133.99845M, Math.Round(monthResult.GrossValue, 5));
                Assert.Equal(1110.54872M, Math.Round(monthResult.LiquidValue, 5));
            }
            else
            {
                Assert.NotNull(monthResult);
            }
        }

        [Fact]
        public void ShouldCalculateCDBValuesFor24Months()
        {
            CalculationRequest request = new()
            {
                BankTax = 1.08M,
                CDI = 0.009M,
                InitialValue = 1000,
                Months = 24
            };

            var result = CalculationAppService.CalculateCDB(request);
            var monthResult = result.GetValueByMonth(request.Months);
            if (monthResult is not null)
            {
                Assert.Equal(1261.31339M, Math.Round(monthResult.GrossValue, 5));
                Assert.Equal(1215.58355M, Math.Round(monthResult.LiquidValue, 5));
            }
            else
            {
                Assert.NotNull(monthResult);
            }
        }


        [Fact]
        public void ShouldCalculateCDBValuesFor25Months()
        {
            CalculationRequest request = new()
            {
                BankTax = 1.08M,
                CDI = 0.009M,
                InitialValue = 1000,
                Months = 25
            };

            var result = CalculationAppService.CalculateCDB(request);
            var monthResult = result.GetValueByMonth(request.Months);
            if (monthResult is not null)
            {
                Assert.Equal(1273.57336M, Math.Round(monthResult.GrossValue, 5));
                Assert.Equal(1232.53735M, Math.Round(monthResult.LiquidValue, 5));
            }
            else
            {
                Assert.NotNull(monthResult);
            }
        }
    }
}
