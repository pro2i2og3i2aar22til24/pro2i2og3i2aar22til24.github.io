# Forløb 21 (forsættelse af forløb 21)

## Øvelsesopgave +
## Nedarvning og refaktorering af "Knapper, der flytter raketter II"

-------------------------------------------------------------------------
## Øvelsesopgave
Dette er en "lille" repetitionsopgave i nedarvning

```java
void setup() {
  Form[] list = new Form[4];

  Rectangle r1 = new Rectangle(3,5);
  Rectangle r2 = new Rectangle(2,9);
  Circle    c1 = new Circle(4);
  Circle    c2 = new Circle(7);

  //opgave 1:
  //skriv den kode, der gør det muligt at indsætte objekterne r1, r2, c1 og c2 i list.
  //og indsæt objekterne i list på denne linje.
  //anvend nedarving!

  float sumArea=0;
  for (Form f : list) {
      sumArea += f.area();
  }
  println(sumArea);

  //opgave 2:
  //skriv kode der beregner den samlede omkreds af alle objekter
}



class Form {
  float area() {
    return 0;
  }
  float omkreds() {
    return 0;
  }
}

class Rectangle {
  float b, h;
  Rectangle(float bin, float hin) {
    b = bin;
    h = hin;
  }
  float area() {
    return b*h;
  }
  float omkreds() {
    return 2*b+2*h;
  }
}

class Circle {
  float r;
  Circle(float rin) {
    r = rin;
  }
  float area() {
    return PI*r*r;
  }
  float omkreds() {
    return 2*PI*r;
  }
}

```

-------------------------------------------------------------------------

## Nedarvning og refaktorering af "Knapper, der flytter raketter II"

Brug nedarvning til at omskrive jeres kode fra "forløb 19" så det fylder så lidt som muligt.  
Hint: Læg mærke til at alle objekter "vises" og "opdateres". Desuden er der mange objekter der opfører sig ligesom knapper.

-------------------------------------------------------------------------

## Ekstra - skydning

Hvis du, mod forventning, er hurtigt færdig med refaktorering, skal du implementere en skyde funktion i raketten.  

Hvis et skud rammer en meteor skal den opdele sig i to mindre meteorer. Efter tre opdelinger kan meteoren ikke opdeles, og vil forsvinde hvis man skyder på den.   

Husk en ny meteor er et nyt objekt ;-)
