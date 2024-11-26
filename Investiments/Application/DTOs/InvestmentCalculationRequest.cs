using System.ComponentModel.DataAnnotations;

namespace Investiments.Application.DTOs
{
    public class InvestmentCalculationRequest
    {
        [Required]
        [Range(minimum: 0, maximum: int.MaxValue, ErrorMessage = "Only positive value are allowed")]
        public decimal InitialValue { get; set; }

        [Required]
        [Range(minimum: 0, maximum: int.MaxValue, ErrorMessage = "Only positive value are allowed")]
        public decimal CDI { get; set; }

        [Required]
        [Range(minimum: 1, maximum: int.MaxValue, ErrorMessage = "Only positive months are allowed")]
        public int Months { get; set; }

        public Tuple<InvestmentType, decimal>[] Investments { get; set; } = [];

        public InvestmentCalculationRequest() { }
    }
}
