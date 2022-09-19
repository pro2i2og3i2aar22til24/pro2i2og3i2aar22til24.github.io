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

I processing har vi en funktionen "loadStrings", se referencen : https://processing.org/reference/loadStrings_.html

Vi skal nu forsøge at anvende denne til at hente data fra "cars.csv".   

- Kopier "cars.csv" ind i jeres sketchbook
- og skriv følgende kode:

```java

  String[] linesFromCars = loadStrings("cras.csv");


```
