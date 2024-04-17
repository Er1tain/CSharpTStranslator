using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using Mainlogic;
using API_translator.Models;

namespace API_translator.Controllers;

public class TranslatorController: Controller {

    public IActionResult ListFiles() {
        List<string> list_files = ["Program.cs", "Pridava.cs", "main.cs", "example.cs", "Test.cs", "index.cs", "project.cs"];

        return Json(list_files);
    }

     public record class DataSerialize(
            string[] text_program,
            string[] code_leksems
        );

    [HttpGet]
    public IActionResult LexAnalys(string filename) {

        (string, string) data = LexAnalyzer.Start(filename);
       
        string[] text_program = data.Item1.Split(" ");
        string[] code_leksems = data.Item2.Split(" ");

        DataSerialize result = new DataSerialize(text_program, code_leksems);

        return Json(result);

    }

}