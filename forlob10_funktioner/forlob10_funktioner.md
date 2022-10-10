# Forløb 10
## Introduktion til funktioner & metoder

Dette forløb omhandler funktioner eller metoder, som man også kalder det i objektorienterede sprog som f.eks. Java ( og processing er jo Java under motorhjelmen).
Man kan sammenligne funktioner eller metoder med "under-programmer", som man kan starte fra "hoved-programmet" flere gange og lige når man har lyst.
Men der er også en lighed med matematiske funktioner, da man kan sende "input" til funktionen, og den kan retunere et output!

*Nye faglige begreber i skal lære!*
- parametre
- argumenter
- "kalde"
- returtype
- metode/funktions-krop
- metode/funktions input

[https://processing.org/examples/functions.html](https://processing.org/examples/functions.html)

```Java
/*
Funktionen/metodens syntaks

returtype navn( input )
{ metode krop...

  retur statement ... afhænger af returtype
}
*/

//eksempel 1
// returtype : int
// navn : sum
// parametre : int a og int
int sum1(int a, int b)
//Her er metode-kroppen
{
  println("input a er : " + a);
  println("input b er : " + b);
  println("summen er  : " + (a+b));

  //retur statement
  return a + b;
}

//eksempel 2
// returtype : void (returnerer ikke!)
// navn : sum
// parametre : int a og int
void sum2(int a, int b)
//Her er metode-kroppen
{
  println("input a er : " + a);
  println("input b er : " + b);
  println("summen er  : " + (a+b));
}

//eksempel 3 : anvendelse af funktionerne sum1 og sum2



```
