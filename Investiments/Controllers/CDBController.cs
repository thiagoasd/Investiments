using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Investiments.Controllers
{
    public class CdbController : Controller
    {
        // GET: CDBController
        public ActionResult Index()
        {
            return View();
        }

    }
}
