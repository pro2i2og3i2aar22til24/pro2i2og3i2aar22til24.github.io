# Forløb 20
## Nedarvning og refaktorering af "Knapper, der flytter raketter II"

-------------------------------------------------------------------------

### Nye termer: nedarvning/inheritance, super-klasser, sub-klasser og overskrivning/overriding
### Nye kerywords: extends

-------------------------------------------------------------------------

## Opgaven:

Brug nedarvning til at omskrive jeres kode fra "forløb 19" så det fylder så lidt som muligt.  
Hint: Læg mærke til at alle objekter "vises" og "opdateres". Desuden er der mange objekter der opfører sig ligesom knapper.

-------------------------------------------------------------------------

## Om nedarvning :

Det er muligt at klasser kan udvides med variabler og metoder fra andre klasser, dette kaldes nedarvning.     
En klasse, der nedarver fra en anden klasse, har muligheden for at overskrive "super-klassens" metoder eller bruge dem direkte som de er implementeret.

Her er et kapitel fra onlinebogen "javabog.dk" om emnet:
[https://javabog.dk/OOP/kapitel5.jsp](https://javabog.dk/OOP/kapitel5.jsp)


Processing-eksempel inspireret af kapitlet ovenfor:

```java
//Læg mærke til at alle objekter kan gemmes i variabler af typen Terning, fordi de nedarver fra Terning!!
Terning t1 = new Terning(50,50);
Terning t2 = new Terning(50,100);
Terning t3 = new FalskTerning(50,150);
Terning t4 = new GrafiskTerning(200,250);

void setup(){
  size(500,500);  
}

void draw(){
  clear();
  t1.display();  t2.display();  t3.display(); t4.display();
}

void mousePressed(){
  t1.kastTerning();  t2.kastTerning();  t3.kastTerning(); t4.kastTerning();
}

```

```java
class Terning{
  int x,y;
  int min=1, max=6;
  int kast = 1;

  Terning(int xin, int yin){
   x = xin; y = yin;
  }

  void kastTerning(){
    kast = (int)random(min,max+1);
  }

  void display(){
    fill(255);
    textSize(18);
    text("terning kast : " + kast,x,y);
  }
}
```

```java
//Falsk terning nedarver alt fra Terning vha. extends...
class FalskTerning extends Terning{

  //hvis super-klassen har en konstruktor
  //skal man kalde den fra sub-klassen!!
  FalskTerning(int xin, int yin){
   super(xin,yin);
   min = 5;
   max = 6;
  }
}
```


```java
//Grafisk terning nedarver alt fra Terning vha. extends...
class GrafiskTerning extends Terning{

  //hvis super-klassen har en konstruktor
  //skal man kalde den fra sub-klassen!!
  GrafiskTerning(int xin, int yin){
   super(xin,yin);
  }

  //Da grafisk-terning gerne vil vise en animation af terningen
  //overskrives metoden display fra Terning-klassen
  void display(){
    noFill();
    stroke(255);
    rect(x-50,y-50,100,100);
    fill(255);
    if(kast==1){ ellipse(x,y,10,10);  }
    if(kast==2){ ellipse(x-30,y-30,10,10);ellipse(x+30,y+30,10,10);}
    if(kast==3){ ellipse(x,y,10,10);ellipse(x-30,y-30,10,10);ellipse(x+30,y+30,10,10);}
    if(kast==4){ ellipse(x-30,y-30,10,10);ellipse(x+30,y+30,10,10);ellipse(x+30,y-30,10,10); ellipse(x-30,y+30,10,10);}
    if(kast==5){ ellipse(x,y,10,10);ellipse(x-30,y-30,10,10);ellipse(x+30,y+30,10,10);ellipse(x+30,y-30,10,10); ellipse(x-30,y+30,10,10);}
    if(kast==6){ ellipse(x-30,y,10,10);ellipse(x+30,y,10,10);ellipse(x-30,y-30,10,10);ellipse(x+30,y+30,10,10);ellipse(x+30,y-30,10,10); ellipse(x-30,y+30,10,10);}
  }
}
```
