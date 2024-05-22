using Mainlogic;
using Microsoft.AspNetCore.Mvc;


namespace API_translator.Controllers;

public class TranslatorController: Controller {

    public IActionResult ListFiles() {
        List<string> list_files = ["Program.cs", "Pridava.cs", "main.cs", "example.cs", "Test.cs", "index.cs", "project.cs"];

        return Json(list_files);
    }


    private record class data_serialize (
        string program_text,
        string code_leksems
    );

    [HttpGet]
    public IActionResult LexAnalys(string filename) {

        (string, string) data = LexAnalyzer.Start(filename);
        
        

        data_serialize programText_and_codeLeksem = new data_serialize(data.Item1, data.Item2);
        
        return Json(programText_and_codeLeksem);

    }

}