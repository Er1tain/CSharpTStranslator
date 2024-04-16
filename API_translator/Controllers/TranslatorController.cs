using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using API_translator.Models;

namespace API_translator.Controllers;

public class TranslatorController: Controller {

    public IActionResult ListFiles() {
        List<string> list_files = ["Program.cs", "Pridava.cs", "main.cs", "example.cs", "Test.cs", "index.cs", "project.cs"];

        return Json(list_files);
    }

}