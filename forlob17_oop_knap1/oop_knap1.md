# Forløb 17
## Knappe opgave

<iframe width="560" height="315" src="https://www.youtube.com/embed/e-WtZoXq5nI" title="knapOpgave 2022 12 13 15 05 08" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Du kan se et løsningsforslag her:     
[oop_knap1.md](oop_knap1.md)

## Del 1:
Inden du påbegynder denne opgave er det vigtigt at du tænker igennem hvilke klasser du har brug for.
Det kan du simpelthen gøre ved at kigge på videoen og se hvor mange elementer der er.
Hvis der er noget flere gange - er det nok flere objekter af samme klasse ;-)


## Del 2:
Lav en oversigt over klasserne, der ligner lidt nedenstående tabel.
Overordnet kan man identificere forskellige dele af klassen på følgende måde:
- data dvs. variabler er selve objektets tilstand
- funktionerne er hvordan man interagerer med objektet (ændrer tilstande dvs. variabelværdier)  

|  Klassens navn|                                        |
| ------------- |----------------------------------------|
| Data          | hvilke variabler indeholder klassen    |
| Funktioner    | hvilke funktioner indeholder klassen   |

## Del 3:
Når du har lavet oversigter over klasserne - laver du kode-skabelonen til de klasser du har brug for, f.eks.:

```java
 class KlassensNavn{
   // variabler. f.eks. ngle integers

   // konstruktøren. f.eks. input med en integer xin

   // herefter kan der være flere forskellige funktioner, dette er bare et eksempel
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
Byg ny den manglende logik. Her en liste over ting du skal løse:

- hvordan registrerer du et klik på "knappen" (hint: objektet skal ændre til stand så du skal bruge en funktion)
- hvordan tegner du "knappen"
- ...

## Del 6:
Udvid koden så du kan lave nedenstående (med bedst mulig oop og på den mest hensigtsmæssige måde):

<iframe width="560" height="315" src="https://www.youtube.com/embed/asho1kq2Ujc" title="knapOpgave1 del6" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
