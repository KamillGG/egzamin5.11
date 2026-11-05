class NumberArray
{
    private Random random = new Random();
    private List<int> ts = new List<int>();
    private int length;
    //**********************************************
    //nazwa metody: NumberArray
    //opis metody: tworzy obiekt klasy
    //parametry: int l - dlugość listy w klasie
    //zwracany typ i opis: brak
    //autor: 12345678910
    //***********************************************
    public NumberArray(int l)
    {
        length = l;
        for(int i = 0; i < length; i++)
        {
            ts.Add(random.Next(0, 1000));
        }
    }
    //**********************************************
    //nazwa metody: DisplayNumbers
    //opis metody: wyświetla liczby w liście
    //parametry: int brak
    //zwracany typ i opis: brak
    //autor: 12345678910
    //***********************************************
    public void DisplayNumbers()
    {
        for(int i = 0;i < length; i++)
        {
            Console.WriteLine($"{i}: {ts[i]}");
        }
    }
    //**********************************************
    //nazwa metody: FindNumber
    //opis metody: znajduje element w liście oraz zwraca jej indeks
    //parametry: int number - liczba do znalezienia w liście
    //zwracany typ i opis: int - indeks na ktorym znajduje się liczba lub -1 gdy liczby nie ma w liście
    //autor: 12345678910
    //***********************************************
    public int FindNumber(int number)
    {
        int result = -1;
        for (int i=0; i< length; i++)
        {
            if (ts[i] == number)
            {
                result = i; break;
            }
        }
        return result;
    }
    //**********************************************
    //nazwa metody: DisplayOddNumbers
    //opis metody: wyświetla liczby nieparzyste oraz zwraca ich ilość
    //parametry: brak
    //zwracany typ i opis: int - liczba liczb nieparzystych w liście
    //autor: 12345678910
    //***********************************************
    public int DisplayOddNumbers()
    {
        int count = 0;
        for (int i = 0; i < length; i++)
        {
            if (ts[i] % 2 == 1)
            {
                count++;
                Console.WriteLine(ts[i]);
            }
        }
        return count;
    }
    //**********************************************
    //nazwa metody: Average
    //opis metody: liczy średnią liczb w liście
    //parametry: brak
    //zwracany typ i opis: double - średnia liczb
    //autor: 12345678910
    //***********************************************
    public double Average()
    {
        double sum = 0;
        foreach (var item in ts)
        {
            sum += item;
        }
        double avg = sum / length;
        return avg;
    }
}
class Program
{
    //**********************************************
    //nazwa metody: Main
    //opis metody: główna funkcja programu
    //parametry: brak
    //zwracany typ i opis: brak
    //autor: 12345678910
    //***********************************************
    public static void Main()
    {
        NumberArray numberArray = new NumberArray(21);
        numberArray.DisplayNumbers();
        int searchedNumber = 150;
        int FoundIndex = numberArray.FindNumber(searchedNumber);
        if(FoundIndex != -1)
        {
            Console.WriteLine($"Liczba {searchedNumber} znaleziona na indeksie: {FoundIndex}");
        }
        Console.WriteLine("Liczby nieparzyste: ");
        Console.WriteLine($"Liczba nieparzystych: {numberArray.DisplayOddNumbers()}");
        Console.WriteLine($"Średnia wszystkich elementów: {numberArray.Average()}");
    }
}