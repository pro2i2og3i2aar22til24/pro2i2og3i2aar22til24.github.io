# Opsamling fra forløb 1 - Introduktion til processing, variabler og datatyper
Her en opsamling fra sidst med de vigtigste pointer ... og ting jeg har glemt.

--------------------------------------------------------------------------------------------------------------
## Husk semikolon


Denne kode virker
```java
int x;
x = 0;
```
Denne kode fejler!!!
```java
int x
x = 0;
```

--------------------------------------------------------------------------------------------------------------

## Oprettelse af variabler
Når man opretter en varible, også kaldet deklarerer en variable, angiver man datatypen og variablenavnet.  
Her oprettes heltals-variablen x 
```java
int x;
```
Man kan herefter tildele værdier til variablen, med =
```java
int x;
x = 0;
```
Både deklaration og værditildeling kan laves på samme linje
```java
int x = 0;
```

--------------------------------------------------------------------------------------------------------------

## Datatyper
Der er mange datatyper i Processing. Dem vi kommer til at arbejde mest med er


|int    | kan indeholde heltal f.eks. *1*|
|:---------|:--------------------------------|
|float  | kan indeholde kommatal f.eks. *1.12*|
|boolean| kan indeholde værdierne *true* eller *false*|
|String | kan tekster f.eks. *"hej verden!"*|









## Continous-mode vs. Non-continous-mode (begreberne er opfundet af mig)
I processing er det muligt at skrive i to forskellig "modes" .

### Non-continous mode (uden brug af funktioner/metoder):
Den mest simple måde du kan skrive programmer på er det man kan kalde "non-continous".

*setup og draw* : Når man skriver setup og draw, er det vigtigt at kende noget til hvor man må skrive sin kode.

*aktiv kode* : Når man har lavet en setup og draw, skal alt akriv kode stå indenfor disse metoder!




*variable scop* : variabler eksisterer inde i scopes
