# Forløb 2 del 2 : Arbejdsmetode og billeder

------------------------------------------------

## Arbejdsmetoden

Når man laver computer programmer arbejder man ofte efter en metode man kan kalde ***stepwise improvement***

![stepwise improvement](stepwise.png)

1. Start med at bryde problemmet ned i små dele
2. Herefter starte man på *første del*
3. Man tester løbende kode ved at køre programmet og udskriver, eventuelt, variabel-værdier
4. Det kan være nødvendigt at bryde en *del* ned i flere *dele*
5. Det er ofte også nødvendigt at søge information på processings reference eller på nettet generelt
6. Man går videre til næste *del*, når koden fungerer

På den måde opstår programmet som en masse små ændringer ved anvendelse af "stepwise improvement".  
Nedbrydningen af hovedproblemet til små delproblemer er meget vigtig.
For det første er det nemmere at søge information om "how to draw pics in processing" end "how to make a animation of a road".   
Når man starter på en opgave er det ofte meget svært at overskue hvordan man skal lave hele programmet.

------------------------------------------------

## Billeder 

Drag & drop billeder ind i din "kode editor", herefter kan du anvende billederne

<iframe width="560" height="315" src="https://www.youtube.com/embed/0m_akNzgTNI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Her er koden

```java
PImage p;
p = loadImage("bil.png");
image(p,1,1);

```
