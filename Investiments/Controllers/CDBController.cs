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
        [Obsolete]
        public CdbCalculation GetCdbCalculation(CdbCalculationRequest request)
        {
            try
            {
                var result = CalculationAppService.CalculateCDB(request);
                return result;
            }
            catch (Exception ex) {
                var ai = new TelemetryClient();
                ai.TrackException(ex);
                Console.WriteLine(ex.Message);
                Console.WriteLine(ex.StackTrace);
            }

            return new CdbCalculation();

        }
    }
}
