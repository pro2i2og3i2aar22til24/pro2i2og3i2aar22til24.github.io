# Opgaver og debugging nr.2
Vi skal forsøge at lave forskellige opgaver fra: https://www.hackerearth.com/
Prøv eventuelt at kode løsningerne i processing og uploade dem når i tænker i er færdige med at løse en opgave.
Brug også debuggeren ligesom i "opgaver og debugging" fra sidst, hvis det er nødvendigt.

## Inputet og output
Alle opgaver kræver at i håndterer input som er en såkaldt "test case" og "output" som er programs løsning på en given "test case".     
Den nemmeste måde at håndtere forskellige typer input og outputtet er følgende:

```java

import java.util.*;
//Denne linje er vigtig - ellers kan man ikke anvende Scanner-klassen


class TestClass {
    public static void main(String args[] ) throws Exception {
        //Alt din kode skrives iindenfor dette scope!

        //Skriv denne linje for at lave et objekt "in",
        //der kan håndtere input!
        Scanner in = new Scanner(System.in); 

        //Skriv denne linje for at læse næste "integer"
        //ind fra inputtet 
        int heltal = in.nextInt();  //

        //Eller skriv denne linje hvis du vil indlæse
        //en hel linje fra inputtet ind som en String
        String linjeAfTekst = in.nextLine();

        //De enkelte tegn kan nu trækkes ud vha. charAt();
        //her hentes første tegn 
        char enkeltSymbol = linjeAfTekst.charAt(0);

        //hvis et enkelt tegn med sikkerhed er et heltal kan
        //man oversætte det til fra char til int således
        //her hentes andet tegn - som her er et heltal
        int heltal2 = (int)linjeAfTekst.charAt(1)-48;

        //når i fundet løsningen på opgaven
        //kan løsningen udskrives vha.:
        System.out.println("løsningen her!");
    }
}
```

## Opgaver i "Basic Programming"

Skriv evt. om løsningerne i jeres log-bog:


[opgave 1 - palindrome](https://www.hackerearth.com/practice/basic-programming/input-output/basics-of-input-output/practice-problems/algorithm/palindrome-check-2/)


[opgave 2 - zoo](https://www.hackerearth.com/practice/basic-programming/input-output/basics-of-input-output/practice-problems/algorithm/is-zoo-f6f309e7/)


[opgave 3 - devisable](https://www.hackerearth.com/practice/basic-programming/input-output/basics-of-input-output/practice-problems/algorithm/divisible-or-not-81b86ad7/)


[opgave 4 - cartag](https://www.hackerearth.com/practice/basic-programming/input-output/basics-of-input-output/practice-problems/algorithm/cartag-948c2b02/)

[opgave 5 - singer](https://www.hackerearth.com/practice/basic-programming/input-output/basics-of-input-output/practice-problems/algorithm/favourite-singer-a18e086a/)