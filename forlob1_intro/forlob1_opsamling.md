# Opsamling fra forløb 1 - Introduktion til processing, variabler og datatyper
Her en opsamling fra sidst med de vigtigste pointer ... og ting jeg har glemt.

--------------------------------------------------------------------------------------------------------------


## Husk semikolon


Denne kode virker | Denne kode fejler!!!
------------------|---------------------
`int x;`    | `int x`


--------------------------------------------------------------------------------------------------------------


## Kommentarer i koden

Det er vigtigt i skriver kommentarer i jeres kode, så i kan huske hvordan koden virker.  

```java
// Her oprettes en heltals-variable med navnet x
int x;
```
Kommentarer kan også bruges til at deaktivere koden... så den ikke virker. Kan være praktisk til at finde fejl
```java
// Nu oprettes der ikke en heltalsvariabel, da nedenstående kode bare er en kommentar
//int x;
```




--------------------------------------------------------------------------------------------------------------

## Oprettelse af variabler
Når man opretter en varible, også kaldet deklarerer en variable, angiver man datatypen og variablenavnet.  

```java
// Her oprettes heltals-variablen x 
int x;
```

```java
//Man kan herefter tildele værdier til variablen, med =
int x;
x = 0;
```

```java
//Både deklaration og værditildeling kan laves på samme linje
int x = 0;
```


```java
// Vigtigt : Man kan ikke anvende en variabel der ikke er oprettet/deklareret**
//Denne kode fejler:
x = 0;
```
--------------------------------------------------------------------------------------------------------------

## Datatyper
Der er mange datatyper i Processing. Dem vi kommer til at arbejde mest med er


|int    | kan indeholde heltal f.eks. *1*|
|:---------|:--------------------------------|
|float  | kan indeholde kommatal f.eks. *1.12*|
|boolean| kan indeholde værdierne *true* eller *false*|
|String | kan tekster f.eks. *"hej verden!"*|

--------------------------------------------------------------------------------------------------------------


## continuous vs. non-continuous kode
I processing er det muligt at skrive kode i to forskellig tilstande.
(begreberne continuous og non-continuous er min egen opfindelse).

### non-continuous kode
**Denne tilstand bruger vi ikke når vi afleverer programmer*    
Her anvender man ikke funktionen "setup", funktionen "draw" eller andre implementation af andre funktioner/metoder i sin kode.
Og koden kører kun en gang. 

```java
// non-continous kode
int x;
x = 0;
x = x + 1;
```

### continuous kode
**Det er denne tilstand vi anvender når vi skriver programmer der skal afleveres*    
Her anvendes implementation af funktioner, som "setup" og "draw":
```java
// continous kode

//man må gerne oprette variabler udenfor setup og draw
//men man må ikke skrive såkaldt aktiv kode såsom: x = 0;
//andet aktiv kode, der selfølgelig heller ikke må skrives her er f.eks.: size(500,500)
int x = 0;

//indholdet i funktion setup bliver kørt én gang i starten af programmet.  
//setup må kan skrives en gang i hele programmet
void setup(){
x = 0;
}

//inholdet i funktionen draw bliver som udgangspunkt gentaget med en frekvens på 30 gange pr sekund. Men det kan ændres til en anden frekvens.
//draw må kun skrives en gang i hele programmet
void draw(){
x = x + 1;
}
```

--------------------------------------------------------------------------------------------------------------

##  Variabel-scope

Der er to forskellige variabel-scopes

- globale scopes : hvis variablen defineres udenfor alle krølle-paranteser er variablen global og kan bruges alle steder i programmet
- lokale scopes : hvis variablen defineres indenfor en krølle-parantes er variablen lokal og kan kun anvendes her

Her et lille eksempel

```java

int x = 0;        //x er en global variabel, der kan bruges alle steder

void setup(){
  int y = 10;     //y er en lokal variabel, den er defineret i setup og kan kun bruges i setup  
}

void draw(){
  //de to linjer under virker fint!
  x = x + 1;
  println("x har værdien : " + x);
  
  //nedenstående to linjer fejler da y er en lokal variabel i "setup" og ikke i "draw"
  y = y + 1;
  println("y har værdien : " + y);
}

```

