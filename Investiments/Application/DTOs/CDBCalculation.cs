namespace Investiments.Application.DTOs
{
    public class CdbCalculation
    {
        public decimal InitialValue { get; set; }
        public decimal BankTax { get; set; }
        public decimal CDI { get; set; }

        public Tuple<DateOnly, decimal>[] values = [];

    }
}
