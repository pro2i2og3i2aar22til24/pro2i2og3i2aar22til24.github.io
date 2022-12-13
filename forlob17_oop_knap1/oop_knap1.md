# Forløb 17
## Knappe opgave

<iframe width="656" height="369" src="https://www.youtube.com/embed/_UeqTfP2Q7U" title="knappeOpgave1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Del 1:
Inden du påbegynder denne opgave er det vigtigt at du tænker igennem hvilke klasser du har brug for.
Det kan du simpelthen gøre ved at kigge på videoen og se hvor mange elementer der er.
Hvis der er noget flere gange - er det nok flere objekter af samme klasse ;-)


## Del 2:
Lav en oversigt over klasserne, der ligner lidt nedenstående tabel:

|  Klassens navn|                                        |
| ------------- |----------------------------------------|
| Data          | hvilke variabler indeholder klassen    |
| Funktioner    | hvilke funktioner indeholder klassen   |

## Del 3:
Når du har lavet oversigter over klasserne - laver du kode-skabelonen til de klasser du har brug for, f.eks.:

```java
 class KlassensNavn{
   // variabler. f.eks. ngle integers
   int x,y,w=50,h=30;

   // konstruktøren. f.eks. input med en integer xin
   KlassensNavn(int xin, int yin){
     x = xin;
     y = yin;
   }

   // herefter kan der være flere forskellige funktioner, dette er bare et eksempel
   void update(){
     if(mousePressed){
       //kode
     }
   }

   void display(){
     rect(x,y,b,h);
   }



 }
```

## Del 4:
Afprøv nu dine klasse-skabeloner ved at lave en setup og draw metode hvor du opretter dine objekter...

```java

//en eller flere objekter oprettes
KlasseNavn objekt1 = new KlasseNavn();

void setup(){
  size(500,500);
}

void draw(){
  clear();
  objekt1.update();
  objekt1.display();
}


```

## Del 5:
Byg ny den manglende logik
