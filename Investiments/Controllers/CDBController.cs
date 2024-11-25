using Microsoft.AspNetCore.Mvc;
using Investiments.Application.DTOs;
using Investiments.Application.Services;
using Microsoft.ApplicationInsights;
using Microsoft.AspNetCore.Mvc.Filters;
namespace Investiments.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class CdbController : Controller
    {
        [HttpPost]
        public CdbCalculation GetCdbCalculation(CdbCalculationRequest request)
        {
            try
            {
                var result = CalculationAppService.CalculateCDB(request);
                return result;
            }
            catch (Exception ex) {
                Console.WriteLine(ex.Message);
                Console.WriteLine(ex.StackTrace);
                throw;
            }
        }
    }
}
