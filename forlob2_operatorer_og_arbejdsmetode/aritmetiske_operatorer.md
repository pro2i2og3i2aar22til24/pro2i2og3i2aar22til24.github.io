# Lektion 1 : Aritmetiske operatorer


![opertorer](operatorer.png)

## Lille opgave : Afprøvning af operatorer

Skriv følgende lille program, og byt "+" ud med de forskellige andre operatorer.
Kan i forklare hvordan de forskellige opartorer virker eller ikke virker.

```java
int x=1,y=2,z=3;
println(x+y);
```

## Afprøvning af aritmetiske operatorer

Nedenfor anvendes de forskellige aritmetiske opertorer på variablen x

```java
// Her oprettes en heltals-variabel kaldet x
//den globale heltals-variabel x oprettes
float x = 0;

void setup(){
  size(500,500);
  //vi sætter en meget langsom framerate 5 frames pr. sekund
  //så vi kan følge med i beregningerne
  frameRate(5);
}

void draw(){
  clear();
  //x forøges med 1 hver frame
  x = x + 1;
  //tekst størrelsen sættes til 24
  textSize(24);
  //Der udskrives beregninger forskellige operatorer
  text("x    : " + x,20,50);
  text("x+10 : " + (x+10),20,100);
  text("x-10 : " + (x-10),20,150);
  text("x%20 : " + x%20,20,200);
  text("x/20 : " + x/20,20,250);
  text("x*2  : " + x*2,20,300);  
}

```

Her kan du se hvordan programmet ser ud når koden køres

<iframe width="560" height="315" src="https://www.youtube.com/embed/VwrCbH5OnyY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## OPGAVE (skal ikke afleveres)

Lav et program der animerer samme bevægelse som på videoen nedenfor.
Opgaven skal laves individuelt eller to personer.
Opgaven kan laves med jeres nye viden om operatorer.

<iframe width="560" height="315" src="https://www.youtube.com/embed/SMWVamMPT_c" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> 
