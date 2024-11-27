namespace Investiments.Application.DTOs
{
    public class InvestmentsCalculation
    {
        public decimal InitialValue { get; set; }
        public decimal Months { get; set; }
        public decimal CDI { get; set; }

        public Calculation[] Calculations { get; set; } = [];

        public InvestmentsCalculation()
        {
            
        }

        public InvestmentsCalculation(Calculation[] calculations)
        {
            var first = calculations[0];
            this.InitialValue = first.InitialValue;
            this.CDI = first.CDI;
            this.Months = first.Values.Count;
            this.Calculations = calculations;
        }
    }
}
