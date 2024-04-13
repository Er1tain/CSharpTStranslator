using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using Translator.Models;

namespace Translator.Controllers;

public class HomeController : Controller
{
    private readonly ILogger<HomeController> _logger;

    public HomeController(ILogger<HomeController> logger)
    {
        _logger = logger;
    }

    private record class Program(string lang, string author);
    
    
    public IActionResult Index()
    {
        Program p = new Program("C#", "ALexander Pridava");
        return Json(p);
    }

    public IActionResult Privacy()
    {
        return View();
    }

    [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
    public IActionResult Error()
    {
        return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
    }
}
