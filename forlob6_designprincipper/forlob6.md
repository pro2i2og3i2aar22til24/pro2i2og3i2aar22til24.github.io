# Programmeringsprincipper og konventioner
Når man skriver funktionel kode, er to centrale mål:

- ***Læsbar kode:*** Koden bør være nem at forstå.
- ***Fleksibel kode:*** Koden bør være let at ændre.

Dette har ført til forskellige sprog, paradigmer og regelsæt. Dog er der ikke altid enighed blandt programmører om den bedste metode.

Inden for visse udviklingsmetoder er der dog bred enighed om visse regler og konventioner, der har vist sig at fungere godt.

### Objektorienterede designprincipper - to vigtige eksempler

![](pic_diagram-04.svg)

Inden for objektorienteret programmering er der to centrale designprincipper, der stræber efter et smidigt og fleksibelt design:

- ***program to an interface, not implementations: Skriv kode, der afhænger af abstraktioner (interfaces) snarere end specifikke implementeringer.***
- ***favor composition over inheritance: Foretræk sammensætning af klasser over at bruge arv.***

[link: blog med et eksempel](https://dmitripavlutin.com/interface-vs-implementation/)     
[link: 10 oop-designprincipper](https://hackernoon.com/10-oop-design-principles-every-programmer-should-know-f187436caf65) 

***Kode-eksempel på anvendelse af de to principper:***   
[eksempel : her er et eksempel på en "knap", der anvender begge ovenstående design-principper](kode_eksempel_oop_design.md)

[***Diagram over hvordan interfaces anvendes i javas Collection bibliteket***](pic_CollectionsInterfaces.png)

[***Skitse af forskellen imellem "composition" og "inheritance"***](pic_IvsC.png)

### Clean Code Konventioner - to Vigtige Eksempler

![](pic_cleancode_graph.png)

Læsbar kode er afgørende, og her er nogle af de vigtigste clean-code regler:

- ***giv meningsfulde navne til variabler, funktioner, klasser og andre enheder i koden.***
- ***skab funktioner, der er små og udfører kun én opgave (og klasser, der har et enkelt "ansvar").***

[link: robert c. martin's bog 'clean code'](https://csiitian.blog/clean-code-by-robert-c-martin-book-summary-32690db5e75b)

--------------------------------------------------------

### Lav følgende opgave:

- Anvend dine ovenstående konventioner og principper til at forbedre en af de to eksamensprojekter fra sidst

- *Alternativ: Hvis du allerede er færdig med dette kan du ave et mini-projekt/program, hvor du anvender ovenstående konventioner og principper til at simulere et økosystem med forskellige væsner lavet som "autonome agenter" eller med "cellular automata".*  