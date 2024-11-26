using Investiments.Application.DTOs;

namespace Investiments.Application.Services
{
    public static class CalculationAppService
    {

        public static Calculation CalculateCDB(CalculationRequest cdb)
        {
            var calculation = CdbCalculator.Calculate(cdb);

            return calculation;
        }

        public static Calculation CalculateLC(CalculationRequest lc)
        {

            var calculation = LCCalculator.Calculate(lc);

            return calculation;
        }

        public static InvestmentsCalculation Calculate(InvestmentCalculationRequest request)
        {

            List<Calculation> calculations = [];
            foreach (var calculation in request.Investments)
            {
                switch (calculation.Item1)
                {

                    case InvestmentType.CDB:
                        var tempCdb = new CalculationRequest()
                        {
                            InitialValue = request.InitialValue,
                            CDI = request.CDI,
                            Months = request.Months,
                            Investment = InvestmentType.CDB,
                            BankTax = calculation.Item2
                        };
                        calculations.Add(CdbCalculator.Calculate(tempCdb));
                        break;

                    case InvestmentType.LC:
                        var tempLc = new CalculationRequest()
                        {
                            InitialValue = request.InitialValue,
                            CDI = request.CDI,
                            Months = request.Months,
                            Investment = InvestmentType.LC,
                            BankTax = calculation.Item2
                        };
                        calculations.Add(LCCalculator.Calculate(tempLc));
                        break;
                }
            }

            InvestmentsCalculation investmentCalculation = new([.. calculations]);
            return investmentCalculation;
        }
    }
}
