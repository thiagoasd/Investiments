using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations.Schema;

namespace Investiments.Application.DTOs
{
    public class CdbCalculation
    {
        public int Id { get; set; }
        public decimal InitialValue { get; set; }
        public decimal BankTax { get; set; }
        public decimal CDI { get; set; }

        [NotMapped]
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

    public class CalculationDbContext : DbContext
    {
        public CalculationDbContext()
        {
        }

        public CalculationDbContext(DbContextOptions<CalculationDbContext> options)
        : base(options)
        {
        }

        public DbSet<CdbCalculation> Calculations { get; set; }
    }
}
