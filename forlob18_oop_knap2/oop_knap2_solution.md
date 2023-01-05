# Forløb 18
## Løsningsforslag - til knap2

```java
Knap up    =  new Knap(75,325,50,50,"up");
Knap left  =  new Knap(25,375,50,50,"left");
Knap right =  new Knap(125,375,50,50,"right");
Knap down  =  new Knap(75,450-25,50,50,"up");

Raket raket1 = new Raket(100,100);
Raket raket2 = new Raket(400,100);

Raket valgtRaket = raket1;
PImage imageRaket ;

void setup(){
  imageRaket = loadImage("rocket.png");  
  size(500,500);
}

void draw(){
  clear();
  up.display();    if(up.clicked)valgtRaket.y--;
  left.display();  if(left.clicked)valgtRaket.x--;
  right.display(); if(right.clicked)valgtRaket.x++;
  down.display();  if(down.clicked)valgtRaket.y++;
  raket1.display();
  raket2.display();
  if(raket1.clicked) valgtRaket = raket1;
  if(raket2.clicked) valgtRaket = raket2;
}

void mousePressed(){
  up.mouseClickDetection();
  left.mouseClickDetection();
  right.mouseClickDetection();
  down.mouseClickDetection();
  raket1.clickedDetection();
  raket2.clickedDetection();
}

void mouseReleased(){
 up.clicked = false;
 left.clicked = false;
 right.clicked = false;
 down.clicked = false;
 raket1.clicked = false;
 raket2.clicked = false;
}
```
-------------------------------------------------------------------------------------------

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

 //mouse clicked funktion - der sætter knappen i tilstanden clicked til true hvis den "rammes" af musen
 void mouseClickDetection(){
   if(mousePressed && mouseX < x + b && mouseX > x && mouseY < y + h && mouseY > y){
     clicked = true;  
   }
 }
 //mouse release funktion - lige så snart museknappen slippes sættes knappen false!
 void mouseReleaseDetection(){
     clicked = false;
 }
}
```

-------------------------------------------------------------------------------------------

```java
class Raket {
  int x, y, b=50, h=73;
  boolean clicked;

  Raket(int xin, int yin) {
    x = xin;
    y = yin;
  }

  void display() {
    if (clicked) {
      fill(255);
      rect(x, y, b, h);
    }
    image(imageRaket, x, y);
  }

  void clickedDetection() {
    if (mousePressed && mouseX < x + b && mouseX > x && mouseY < y + h && mouseY > y) {
      clicked = true;
    }
  }
}
```
