# Forløb 13
## Opgave i implementering af algoritmer til at løse problem

Problemet består i at indsætte og finde tal i en meget lang fil af tal.
Når programmet kører er det sandsynligt at operatøren skal indsætte og finde mange forskellige tal i filen.
Det er derfor specielt denne del af processen der skal optimeres.

# Opgaver og aflevering

- bla
- bla bla
- bla bla bla

# Forslag til kode impplementering

Tag gerne udgangspunkt i denne kode, der har implementeret metoden "findIndexL", men mangler en metode til at indsætte nye tal.

```java
void setup(){
  
  String[]  stringList  = loadStrings("mega_liste.txt");
  int[]     intList = new int[stringList.length];

  for(int i=0 ; i<intList.length ; i++ ){
    intList[i] = Integer.parseInt(stringList[i]);
  }

  println("fil længde: ", intList.length);

  maalTiden(intList);

  exit();
}


void maalTiden(int[] intList){
  long startTime = millis();
  //println(startTime);
  println("index på søgte tal", findIndexB(219975603,intList));
  long endTime = millis();
  println("Time: " + (endTime-startTime));

}

int findIndexL(int tal, int[] liste){
  int plads = 0;
  boolean succes = false;
  for(int i=0 ; i< liste.length ; i++){
    if(liste[i]==tal){
      succes = true;
      plads = i;
      break;
    }
  }
  if(succes){
    return plads;
  }else{
    return -1;
  }
}


```