using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using Translator.Models;

namespace Translator.Controllers;

public class TranslatorController : Controller 
{
    [HttpGet]
    public IActionResult ListFiles() {
        List<string> files = ["Program.cs", "main.cs", "example.cs", "testing.cs"];
        return Json(files);
    }

    [HttpGet]
    public IActionResult getLeksAnalys() {
        return Json("");
    }


}