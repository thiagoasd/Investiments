namespace Investiments.Application.DTOs
{
    public class CdbCalculation
    {
        public decimal InitialValue { get; set; }
        public decimal BankTax { get; set; }
        public decimal CDI { get; set; }

        public List<MonthlyCalculation> Values { get; set; } = [];

        public MonthlyCalculation? GetValueByMonth(int month)
        {
            return Values.Find(x => x.Month == month);
        }
    }

    public class MonthlyCalculation
    {
        public int Month { get; set; }
        public decimal GrossValue { get; set; }
        public decimal TaxValue { get; set; }
        public decimal LiquidValue { get; set; }
    }
}
