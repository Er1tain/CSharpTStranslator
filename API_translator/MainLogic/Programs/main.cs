namespace TranslatorPrograms;
public class Program {
    public static void Main() {
        int a, b;
        a = Convert.ToInt32(Console.ReadLine());
        b = Convert.ToInt32(Console.ReadLine());

        if (a - b > 0) {
            for (int i = 0; i < 10; i++) Console.WriteLine(i);

        } else {
            Console.WriteLine("fweg");
        }
    }
}