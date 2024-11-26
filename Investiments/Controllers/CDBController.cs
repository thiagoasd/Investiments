using Microsoft.AspNetCore.Mvc;
using Investiments.Application.DTOs;
using Investiments.Application.Services;
namespace Investiments.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class CdbController(CalculationDbContext context) : Controller
    {
        public CalculationDbContext Context { get; set; } = context;

        [HttpPost]
        public Calculation GetCdbCalculation(CalculationRequest request)
        {
            var result = CalculationAppService.CalculateCDB(request);
            //Context.Add(result);
            //Context.SaveChanges();
            return result;
        }

        [HttpPost]
        [Route("GetCalculation")]
        public InvestmentsCalculation GetCalculation(InvestmentCalculationRequest request)
        {
            var result = CalculationAppService.Calculate(request);
            //Context.Add(result);
            //Context.SaveChanges();
            return result;
        }
    }
}
