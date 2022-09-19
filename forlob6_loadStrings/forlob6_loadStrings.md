# Forløb 6
## Load data fra fil vha. "loadStrings"

### Data-filen

Der er mange forskellige måder at hente data fra filer med dertrilhørende data-behandling.
Den måde vi skal anvende nu er processings inbyggede metode "loadString".   

Men for at bruge metoden, skal vi selvfølgelig have en datafil - vi anvender følgende:

[cars.csv](cars.csv)   

Hvis i åbner filen vil i se at den består af mange linjers data for forskellige biler, sepereret med ";".  
Øverst i filen står kolonne navne, pladserne for hver kategori af data.   

### LoadStrings

I processing har vi en funktionen "loadStrings", se referencen : [https://processing.org/reference/loadStrings_.html](https://processing.org/reference/loadStrings_.html)    

-----------

Vi skal nu forsøge at anvende denne til at hente data fra "cars.csv".   

Kopier "cars.csv" ind i jeres sketchbook og skriv følgende kode:

```java
//UDSKRIFT AF HELE FILEN - CARS.CSV

  String[] linesFromCars = loadStrings("cars.csv");

  for(int i = 0 ; i < linesFromCars.length ; i++){
    println(linesFromCars[i]);
  }

```

Ovenstående kode udskriver alle data-filen "cars.csv".

***Kan du forklare hvordan det virker (anvend jeres viden om arrays)?***

-----------------

Men hvad hvis man ikke er interesseret i hver enkelt linje men måske kun "acceleration" ??                     
Så kan vi anvende string-funktionen kaldet "split". Se referencen : [https://processing.org/reference/split_.html](https://processing.org/reference/split_.html)                     
Prøv at betragt følgende kode:             

```java
//UDSKRIFT AF ACCELERATION FRA FILEN - CARS.CSV

  String[] linesFromCars = loadStrings("cars.csv");

  for(int i = 0 ; i < linesFromCars.length ; i++){

    String[] dataFromRow = linesFromCars[i].split(";");

    println(dataFromRow[6]);

  }
```

Ovenstående skrive accelerationen ud for hver enkelt bil.

***Kan du forklare hvordan det virker?***

***Kan du forklare hvorfor den skriver to tekster ud i starten?***

***Kan du rette koden så de to tekster i starten ikke udskrives?***

------------

Nu er det på tide at prøve at lave databehandling.   
Hvad hvis man kun vil udskrive de hurtigste biler, dem med acceleration på under 10 sekunder?   
Det giver et problem for alt den data vi anvender er "tekst" og ikke "tal".

Prøv følgende:

```java
//KONVERTERING FRA TEKST TIL TAL
  int   helTal    = Integer.parseInt("20");
  float kommaTal  = Float.parseFloat("20.2");
```

Dette kan anvendes i vores databehandlings program til at finde de biler der han en acceleration der er hurtigere end 10 sek....  

```java
//UDSKRIFT AF BILER DER DER KAN ACCELERERE HURTIGERE END 10 SEK - CARS.CSV

  String[] linesFromCars = loadStrings("cars.csv");

  for(int i = 2 ; i < linesFromCars.length ; i++){

    String[] dataFromRow = linesFromCars[i].split(";");

    if( Float.parseFloat(dataFromRow[6]) < 10 ){

      println(linesFromCars[i]);

    }

  }
```

***Hvorfor anvendes Float.parseFloat() og ikke Integer.parseInt()?***

---------------

## Opgaven (grupper på maksimalt 2)

I skal lave et program til databehandling af cars.csv.    

***Vigtigt:    
Alle skal skrive en beskrivelse af, og hvordan programmet virker i jeres log-bog. Denne beskrivelse skal kunne fungere som note til en præsentation senere... husk "fag-begreber" er vigtige i programmering!***.              
***Hints til fagbegreber i bør anvende: oprettelse af variabler, initalisering, datatyper, arrays, elementer og index***

Lav programmet brugervenligt. Man skal kunne vælge at få vist alle data for en at følgende:
- Hurtigste bil
- Langsomste bil
- Tungeste bil 
- Letteste bil

Frivilligt:
- Sortere biler, efter f.eks hurtigste    
