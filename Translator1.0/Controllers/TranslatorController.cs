using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using Translator1._0.Models;

namespace Translator1._0.Controllers;

public class TranslatorController: Controller {

    public IActionResult ListFiles() {
        List<string> list_files= ["Program.cs", "Main.cs", "Pridava.cs", "Example.cs", "test.cs", "index.cs"];
        return Json(list_files);

    }

}