# Ekstra opgave : billed-slider

Dette er en svær opgave, og det er ikke sikkert man når helt i mål, men bare man får lavet en lille del af opgaven og tænkt lidt over problemstillingen er det helt acceptabelt.   



Opgaven er at lave et lille puzzle-spil hvor man skal kunne skubbe rundt på et billede der er delt op i firkanter. Det er måske nemmere at forstå hvis man ser videoen nedenfor:

<iframe width="560" height="315" src="https://www.youtube.com/embed/0l1NlJ-ujDc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

Her er et link til billedet af solen:   
[sol.png](sol.png)


-----

Dette er selvfølgelig en øvelse i så mange kodefærdigheder som i kan,- derfor skal i prøve at tænke objektorienteret.   
Her nedenfor har jeg skrevet et forslag til hvordan i starter på opgaven:

- Prøv først at vise billedet i jeres program

- Brug derefter lidt tid på at se om i kan kopiere en del af billedet over i et nyt billede. Her lidt eksempelkode:

```
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

- Lav nu en klasse, f.eks. kaldet "Part", der skal fungere som placeholder for de forskellige dele af billedet.

- Afprøv klassen...

- Lav et loop der hakker dit billede op i dele og gemmer det i et array eller en ArrayList

- Afprøv om du kan tegne de enkelte billeddele, der ligger i listen vha. et for-loop

- Indbyg en mekanik i klassen så den kan tegne en hvid firkant istedet for billedet ... dette kan udgøre den tomme rubrik

- Nu skal du mousePress funktionen - den skal bytte ud på positionen imellem den brik du trykker på og den tomme plads

God fornøjelse