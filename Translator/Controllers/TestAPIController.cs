using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using Translator.Models;

namespace Translator.Controllers;

public class TestAPIController: Controller
{
    private record class Program(string lang, string author);
    
    public IActionResult Test()
    {
        Program p = new Program("C#", "Alexander Pridava");
        return Json(p);
    }
}