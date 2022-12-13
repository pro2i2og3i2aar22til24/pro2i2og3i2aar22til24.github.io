# Forløb 16
# Followers - ting der følger noget andet

Denne gang skal vi prøve at lave en lille øvelse, der forhåbentligt hjælper lidt på jeres forståelse af
objekter og klasser er.
Vi skal lave en lille kugle, der følger musen...
Og måske efterfølgende, hvis der bliver tid til det lave en slange af kugler, der følger musen.

-----------------------------------------------------------------------------------------------------
## Tjek din viden

 vi starter med følgende hurtige spørgsmål (tag 5 minutter med og gennemgå spørgsmål, helst sammen med en anden)
 - hvad er en klasse
 - hvad er et objekt
 - hvad betyder class
 - hvad betyder new
 - hvordan fungerer dot-operatoren

 -----------------------------------------------------------------------------------------------------
## PVector

Når man laver ting, der bevæger sig er det meget nemmere at anvende vektorer. Derfor skal i lære PVector at kende:

[https://processing.org/reference/PVector.html](https://processing.org/reference/PVector.html)

Men bare rolig i behøver ikke at lære en masse vektor-regning, for alle vektor-formlerne er indbygget i vektor-klassen.

Betragt nedenstående kode og se om i kan forklare koden for hinanden:

```java
PVector v1, v2;

void setup() {
  size(500,500);
  v1 = new PVector(400, 250);
  v2 = new PVector(1, 1);
}

void draw() {
  clear();
  v1.add(v2);
  ellipse(v1.x,v1.y,20,20);
  v2.rotate(0.01);
}
```

-----------------------------------------------------------------------------------------------------
# Opgaven

## Del 1 : Lav en ting der følger musen

<iframe width="320" height="560" src="https://www.youtube.com/embed/5yII6OJ1O54" title="" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Del 2 : Lav en ting, der følger en anden ting, der følger en tredje som følger musen
### (med forskellig hastighed!)

<iframe width="320" height="560" src="https://www.youtube.com/embed/dwCLB2wQ7bw" title="" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Del 3 : Lav en slange af ting der følger hinanden

<iframe width="320" height="560" src="https://www.youtube.com/embed/qAY3ex2Un1s" title="En masse ting der følger hinanden" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
