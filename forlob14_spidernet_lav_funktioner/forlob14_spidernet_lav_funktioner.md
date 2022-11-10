# Forløb 14
## Øvelse at læse/modificere kode. Byg kode vha. funktioner

### Afleveringen: Indskriv hvad i har lært i logbog eller forklaring af løsning

Dette er en øvelse i at bygge sin kode op vha. funktioner. Det er også en øvelse i forstå hvordan en funktion virker - bare ved at læse hvordan den bliver kaldt!

I skal anvende følgende kode:

```java
int[] listX  = {};
int[] listY  = {};
int N = 0;

void setup(){
  size(500,500);
}

void draw(){
  clear();
  drawPoints(listX,listY);
  drawNet(listX,listY);  
  if(N!=0){
    ellipse(average(listX),average(listY),20,20);
  }
}

void mousePressed(){
  listX = addValue(listX,N,mouseX);
  listY = addValue(listY,N,mouseY);
  N++;
  print("Xer:"); printList(listX);
  print("Yer:"); printList(listY);
}
```

Programmet virker på følgende måde når det afvikles:

<iframe width="560" height="315" src="https://www.youtube.com/embed/SBSUhBMSXG0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

# Opgaven
1. Se videoen ovenfor og læs koden efterfølgende.
2. Gennemgå koden sammen med en makker så i begge er sikre på hvordan koden, og dermed funktionerne, virker.
3. Byg nu funktionerne i følgende rækkefølge: *addValue, printList, average, drawPoints, drawNet*. Hver gang i har bygget en funktion, tester i om de virker efter hensigten. Det kan være nødvendigt at skrive lidt test-kode og slette det igen.
4. Frivillig svær opgave: Kan du udtænke en metode til at punkterne langsomt bevæger sig imod centrum?
5. Frivillig svær opgave: Kan du udtænke en metode til at anmiere to tilfældige punkter bytter plads?
