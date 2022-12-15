# Forløb 17
## Løsningsforslag - til kanppeopgaven

Jeg har skrevet koden i nedenstående Løsningsforslag meget kompakt - med flere variabler på samme linje.
Det har ikke nogen funktionel betydning,- men jeg synes at det er lidt mere overskueligt i det her tilfælde, da
man nemmere kan se de forskellig kommentarer i koden på samme tid

---------------------------------------------------------------------------------------------------------------------
### Knap klassen:

Nedenfor kan i se en mulig implementation af en knap-klasse.
Der er selvfølgelig mange andre måder at implementere en knap på, men det fordelagtige ved denne implementation er at
klassen har indbygget en tilstand "clicked", der gør den generel - således den kan bruges til mange forskellige opgaver!:

```java
class Knap{
 //knappens data
 float x,y,b,h; boolean clicked; String titel;        

 //knappens konstruktør - her indstilles knappens start-data når den oprettes
 Knap(float xin,float yin, float bin, float hin, String titelin){
   x = xin; y = yin; b = bin; h = hin;titel = titelin;
 }

 //display funktion - til at tegne knappen
 void display(){
    if(clicked) fill(100); else fill(200);
    rect(x,y,b,h);
    fill(0);
    textSize(15);
    text(titel,x+5,y+h/2+5);
 }

 //clicked funktion - der sætter knappen i tilstanden clicked til true eller false
 void clickedDetection(){
   clicked = false;
   if(mousePressed && mouseX < x + b && mouseX > x && mouseY < y + h && mouseY > y){
     clicked = true;  
   }
 }
}
```

---------------------------------------------------------------------------------------------------------

### De tre knap-objekter, og anvendelsen af dem:

Her ser i kode der laver objekter af klassen knap - og grundet knappens generelle opbygning -
kan vi nu lave tre forskellige knapper, der anvendes til helt forskellige opgaver:

```java
Knap kplus,kminus,kreset; int count=0;

void setup(){
 size(500,500);
 //her oprettes de tre forskellige knappe-objekter
  kplus   = new Knap(100,  100,  80,  30,"Plus");
  kminus  = new Knap(100,  140,  80,  30,"Minus");
  kreset  = new Knap(100,  180,  80,  30,"Reset");     
}

void draw(){
  clear();
  //her anvendes kplus, kminus og kreset knapperne...
  //på trods af de alle er lavet af samme klasse gør de noget helt forskelligt
  //dette ses if-statementet til sidst i hver linje
  kplus.display();   kplus.clickedDetection();  if(kplus.clicked){  count++;}
  kminus.display();  kminus.clickedDetection(); if(kminus.clicked){ count--;}
  kreset.display();  kreset.clickedDetection(); if(kreset.clicked){ count=0;}
  fill(255);
  rect(200,100,3+count,30);
}  
```  
