namespace Mainlogic;

public class LexAnalyzer {

    /*
    Служебные слова W
    Идентификаторы I
    Операции O
    Разделители R
    Константы числовые N
    Константы символьные С
*/

    private static int check_in_base(string buffer, List<string>Leksems) {
        for (int i = 0; i < Leksems.Count; i++) {
            if (buffer == Leksems[i]) return i;
        }

        return -1;
    }

    private static void ChangeState(char symbol,  ref char state, ref char pred_state) {
        //Возможные значения state: S, F, Z, 1...10(схему смотри) + 11 вспомогательное

        string litters = "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM"; //Латинские буквы

        string operations = "+-*%=!><&|^";

        string separators = "{ }[](),;.";
        string digits = "0123456789";

        switch (state) {
            case 'S':
                pred_state = 'S';
                if (litters.IndexOf(symbol) != -1) state = '1';
                else if (operations.IndexOf(symbol) != -1) state = '3';
                else if (separators.IndexOf(symbol) != -1) state = 'S';
                else if (digits.IndexOf(symbol) != -1) state = '4';
                else if (symbol == '"') state = '6';

                break;

            case '1':
                pred_state = '1';
                if (litters.IndexOf(symbol) != -1) state = '1';
                if (digits.IndexOf(symbol) != -1) state = '2';
                if (operations.IndexOf(symbol) != -1 || separators.IndexOf(symbol) != -1) state = 'S';
                break;

            case '2':
                pred_state = '2';
                if (litters.IndexOf(symbol) != -1 || digits.IndexOf(symbol) != -1) state = '2';
                if (operations.IndexOf(symbol) != -1 || separators.IndexOf(symbol) != -1) state = 'S';
                break;

            case '3':
                pred_state = '3';
                if (operations.IndexOf(symbol) != -1) state = '3';
                if (operations.IndexOf(symbol) != -1 || separators.IndexOf(symbol) != -1) state = 'S';
                break;

            case '4':
                pred_state = '4';
                if (digits.IndexOf(symbol) != -1) state = '4';
                else if (operations.IndexOf(symbol) != -1 || separators.IndexOf(symbol) != -1) state = 'S';
                else if (symbol == '.') state = '5';
                break;

            case '5':
                pred_state = '5';
                if (digits.IndexOf(symbol) != -1) state = '5';
                else if (operations.IndexOf(symbol) !=-1 || separators.IndexOf(symbol) != -1) state = 'S';
                break;

            case '6':
                pred_state = '6';
                if (symbol == '"') state = 'S';
                else state = '6';
                break;

        }
}

    //identificators
    private static void Semantic_procedure_1(ref string buffer, ref List<string> identificators, ref string result, ref string code_leksem) {
            if (check_in_base(buffer, identificators) != -1) {
                code_leksem = "I" + check_in_base(buffer, identificators).ToString();
                result += code_leksem + ' ';
            }
            else {
                identificators.Add(buffer);
                result += "I" + check_in_base(buffer, identificators).ToString() + ' ';
            }


                buffer = "";
            }
    
    //System Word
    private static void Semantic_procedure_2(ref string buffer, List<string> SystemWordBase, ref List<string> identificators, ref string result, ref string code_leksem)
        {
        if (check_in_base(buffer, SystemWordBase) != -1) {
            code_leksem = "W" + check_in_base(buffer, SystemWordBase).ToString();
            result += code_leksem.ToString() + ' ';
        }
        else {
            Semantic_procedure_1(ref buffer, ref identificators, ref result, ref code_leksem);
        }

            buffer = "";
        }

    private static void Semantic_procedure_3(ref string buffer, List<string> Operations, ref string result, ref string code_leksem) {
        if (check_in_base(buffer, Operations) != -1) {
            code_leksem = "O" + check_in_base(buffer, Operations).ToString();
            result += code_leksem + ' ';
        }
        else {
            Console.WriteLine("Not valiable operations!");
        }
       
        buffer = "";

    }

    private static void Semantic_procedure_4(ref string buffer, List<string> Separators, ref string result, ref string code_leksem) {
        if (check_in_base(buffer, Separators) != -1) {
            code_leksem = "R" + check_in_base(buffer, Separators).ToString();
            result += code_leksem + ' ';
        }

        
        buffer = "";
    }

    private static void Semantic_procedure_5(ref string buffer, ref List<string> number_constants, ref string result, ref string code_leksem) {
        if (check_in_base(buffer, number_constants) != -1){
            code_leksem = "N" + check_in_base(buffer, number_constants).ToString();
            result += code_leksem + ' ';
        }
        else{
            number_constants.Add(buffer);
            code_leksem = "N" + check_in_base(buffer, number_constants).ToString();
            result += code_leksem + ' ';
        }

        buffer = "";
    }

    private static void Semantic_procedure_6(ref string buffer, ref List<string> str_constants, ref string result, ref string code_leksem) {
        if (check_in_base(buffer, str_constants) != -1){
            code_leksem = "C" + check_in_base(buffer, str_constants).ToString();
            result += code_leksem + ' ';
        }
        else{
            str_constants.Add(buffer);
            code_leksem = "C" + check_in_base(buffer, str_constants).ToString();
            result += code_leksem + ' ';
        }

        
        buffer = "";
    }

    public static List<List<string>> Start(string filename) {
        
        //Формируем базу служебных слов С#
        List<string> SystemWordBase = [
                "abstract", "as", "base","bool", "break", "byte", "case", "catch", "char", "checked", "class", "const", "continue",
                "Console", "Convert", "decimal", "default", "delegate", "do", "double", "else", "enum", "event","explicit", "extern",
                "false", "finally", "fixed", "float", "for", "foreach", "goto", "if", "implicit", "in", "int", "interface","internal", "is", "lock",
                "long", "namespace", "new", "null", "object", "operator", "out", "override", "params", "private", "protected", "public", "readonly", "ref",
                "return", "Read", "ReadLine", "sbyte", "sealed", "short", "sizeof", "stackalloc", "static", "string", "struct","switch","System", "this", "throw", "true",
                "try", "typeof", "ToDouble", "uint", "ulong", "unchecked", "unsafe", "ushort", "using","virtual", "void", "volatile", "while", "Write", "WriteLine"
        ];


        //Формируем базу операций(арифметические, логические, побитовые, унарные, реляционные)
        List<string> Operations = [
                "+", "-", "*", "/", "%", "++", "--", "==",
                "!=", ">", "<", "<=", ">=", "&&", "||", "!",
                "&", "|", "^", "<<", ">>", "=", "+=", "-=",
                "*=", "/=", "%=", "<<=", ">>=", "&=", "^=", "|="
        ];


        //Формируем базу разделителей
        List<string> Separators = [
                "[", "]", "(", ")", ",", ";", ".", "{", "}"
        ];


        //Формируем базу идентификитаров
        List<string> identificators = [];

        //Формируем базу констант числовых
        List<string> number_constants = [];

        //База символьных констант
        List<string> str_constants = [];

        //Внутренне представление лексем
        string result = "";

        using (StreamReader program = new StreamReader($"C:\\translator\\CSharpTStranslator\\API_translator\\MainLogic\\Programs\\{filename}")) {
            string program_tokens = "";
            string line = "";
            while ((line = program.ReadLine()) != null){

                program_tokens += line;
            }
        //Save leksem and her code, example: ("a", "I0")
        //List<(string, string)> list_leksem_and_code = [];
        List<List<string>> list_leksem_and_code = [];

        //в program_tokens сохранен текст программы main.cs
        string buffer = ""; //сохраняется лексема для последующей обработки
        char pred_state = ' ';
        char state = 'S'; //Состояние лексического анализатора, которое зависит от входящих символов и определяет вид процедуры обработки; Начальное состояние – S

        for (int i = 0; i < program_tokens.Length; i++) {

            ChangeState(program_tokens[i], ref state, ref pred_state);
            buffer += program_tokens[i];

    
            if (state == 'S') {
                string sep = buffer.Substring(buffer.Length - 1);
                buffer = buffer.Substring(0, buffer.Length-1);

                //Save value of buffer
                string key = buffer;

                string code_leksem = "";

                switch (pred_state) {
                    case '1':
                        Semantic_procedure_2(ref buffer, SystemWordBase, ref identificators, ref result, ref code_leksem);
                        break;

                    case '2':
                        Semantic_procedure_1(ref buffer, ref identificators, ref result, ref code_leksem);
                        break;

                    case '3':
                        Semantic_procedure_3(ref buffer, Operations, ref result, ref code_leksem);
                        break;

                    case '4':
                        Semantic_procedure_5(ref buffer, ref number_constants, ref result, ref code_leksem);
                        break;

                    case '5':
                        Semantic_procedure_5(ref buffer, ref number_constants, ref result, ref code_leksem);
                        break;

                    case '6':
                        Semantic_procedure_6(ref buffer, ref str_constants, ref result, ref code_leksem);
                        break;

                    case 'S':
                        Semantic_procedure_4(ref buffer, Separators, ref result, ref code_leksem);
                        break;
                }
                Semantic_procedure_4(ref sep, Separators, ref result, ref code_leksem);

                // var pair = (buffer, code_leksem);
                List<string> pair = [key, code_leksem];
                list_leksem_and_code.Add(pair);

        }

    }
        return list_leksem_and_code;

        }


        }

    
}



    
    
    