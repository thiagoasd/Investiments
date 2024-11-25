using Microsoft.AspNetCore.Mvc;
using Investiments.Application.DTOs;
using Investiments.Application.Services;
namespace Investiments.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class CdbController : Controller
    {
        [HttpPost]
        public CdbCalculation GetCdbCalculation(CdbCalculationRequest request)
        {
            var result = CalculationAppService.CalculateCDB(request);
            return result;
        }
    }
}
