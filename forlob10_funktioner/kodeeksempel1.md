# Kode eksempel der illustrerer syntaks for funktioner/metoder

```java
/*Funktionen/metodens syntaks:

returtype navn( input )
{ metode krop...

  retur statement ... afhænger af returtype
}
*/

//eksempel 1
// returtype : int
// navn : sum
// parametrene : a og b
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
void setup(){

  //Dette er et "metode-kald" til metoden sum1
  //argumenterne er 2 og 3
  //retur-værdien fra kaldet gemmes i variablen kaldet "c"
  int c = sum1(2,3);

  println("Outputtet, der retuneres fra kaldet til funktionen sum1, er :" + c);

  //Dette er et "metode-kald" til metoden sum2 - metoden returnerer ikke nogen værdi!!
  sum2(2,3);
}

```
