# Ekstraopgave: Billedslider

Dette er en udfordrende opgave, og det er muligt, at det ikke er opnåeligt at fuldføre den i sin helhed. Det er derfor helt acceptabelt at opnå en del af opgaven og tænke grundigt over problemet.

Opgaven består i at skabe et lille puslespil, hvor man skal flytte rundt på en opdelt billede ved at skubbe firkanter. For bedre forståelse, kan videoen nedenfor ses:

[Se video](https://www.youtube.com/embed/0l1NlJ-ujDc)

Her er et link til billedet af solen:   
[sol.png](sol.png)

---

Formålet med denne opgave er at udvikle og demonstrere flere kodefærdigheder (inden testen). Det er derfor en god idé at tænke i objektorienteret programmering.    
Herunder er et forslag til, hvordan du kan starte på opgaven:

1. Begynd med at vise billedet i dit program.

2. Efterfølgende, brug lidt tid på at eksperimentere med at kopiere en del af billedet over til et nyt billede. Her er et eksempel på kode:

```java
PImage originalImage;  // Input billede
PImage croppedImage;   // Det beskårne billede

void setup() {
  size(800, 600);
  originalImage = loadImage("original.jpg");  // Indlæs dit eget billede her
  croppedImage = createImage(originalImage.width, originalImage.height / 2, RGB);
  
  // Kopier den ønskede del af det originale billede til det beskårne billede
  croppedImage.copy(originalImage, 0, 0, originalImage.width, originalImage.height / 2, 0, 0, originalImage.width, originalImage.height / 2);
  
  // Gem det beskårne billede som en ny fil
  croppedImage.save("cropped.jpg");
  
  // Vis begge billeder på skærmen
  image(originalImage, 0, 0);
  image(croppedImage, 0, originalImage.height / 2);
}
```

3. Lav en klasse, f.eks. kaldet "Part," som fungerer som en pladsholder for de forskellige dele af billedet.

4. Afprøv klassen...

5. Implementer en løkke, der opdeler dit billede i Part objekter og gemmer dem i et array eller en ArrayList.

6. Udforsk om du kan tegne de individuelle billeddele fra listen ved hjælp af en for-løkke.

7. Implementer mekanikken i klassen, så den kan tegne en hvid firkant i stedet for det faktiske billede ... dette kan repræsentere den tomme plads.

8. Tilføj nu funktionen `mousePressed()`. Denne funktion skal ombytte positionen mellem den brik, der blev klikket på, og den tomme plads.

Håber, du får fornøjelse af opgaven!