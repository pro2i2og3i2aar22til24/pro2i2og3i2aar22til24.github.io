# Forløb 19
## Løsningsforslag - til knapRaket3

---------------------------------------------------------------------------------------------------------

```java
Knap upBtn    =  new Knap(100-25, 350-25, 50, 50, "up");
Knap leftBtn  =  new Knap(50-25, 400-25, 50, 50, "left");
Knap rightBtn =  new Knap(150-25, 400-25, 50, 50, "right");
Knap downBtn  =  new Knap(100-25, 450-25, 50, 50, "up");

Raket raket1  =  new Raket(100, 100);
Raket raket2  =  new Raket(400, 100);

Meteor meteor1 = new Meteor(250, 250);
Meteor meteor2 = new Meteor(250, 250);
Meteor meteor3 = new Meteor(250, 250);

Raket valgtRaket = raket1;
PImage raketImage, meteorImage, fireImage ;

void setup() {
  imageMode(CENTER);
  rectMode(CENTER);
  fireImage = loadImage("fire.png");
  raketImage = loadImage("rocket.png");
  meteorImage = loadImage("meteor.png");
  size(500, 500);
}

void draw() {
  clear();
  meteor1.updateAndDisplay(); meteor2.updateAndDisplay(); meteor3.updateAndDisplay();

  upBtn.display();    if (upBtn.clicked)valgtRaket.moveUp();
  leftBtn.display();  if (leftBtn.clicked)valgtRaket.moveLeft();
  rightBtn.display(); if (rightBtn.clicked)valgtRaket.moveRight();
  downBtn.display();  if (downBtn.clicked)valgtRaket.moveDown();
  raket1.display(); raket2.display();
  if (raket1.clicked) valgtRaket = raket1; if (raket2.clicked) valgtRaket = raket2;
}

void mousePressed() {
  upBtn.mouseClickDetection(); leftBtn.mouseClickDetection(); rightBtn.mouseClickDetection(); downBtn.mouseClickDetection();
  raket1.clickedDetection(); raket2.clickedDetection();
}

void mouseReleased() {
  upBtn.clicked = false; leftBtn.clicked = false; rightBtn.clicked = false; downBtn.clicked = false;
  raket1.clicked = false; raket2.clicked = false;
}
```

---------------------------------------------------------------------------------------------------------

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
     rectMode(CORNER);
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

---------------------------------------------------------------------------------------------------------

```java
class Meteor {
  float x, y;
  float xSpeed, ySpeed;
  float angle;
  float angleSpeed;

  Meteor(int xin, int yin) {
    x = xin;
    y = yin;
    xSpeed = random(-2, 2);
    ySpeed = random(-2, 2);
    angleSpeed = random(-.1, .1);
  }

  void updateAndDisplay() {
    //så meteor ikke flyver væk væk fra skærmen
    if (x<0-50)x= width+50;       
    else if (x>width+50) x=0-50;
    else if (y<0-50)y= height+50;
    else if (y>height+50) y=0-50;
    //opdatering af position og visning
    x+=xSpeed;
    y+=ySpeed;
    angle+=angleSpeed;
    pushMatrix();
    translate(x, y);
    rotate(angle);
    image(meteorImage, 0, 0);
    popMatrix();
    println(x, y);
  }
}
```

---------------------------------------------------------------------------------------------------------

```java
class Raket {
  int x, y, b=50, h=73;
  boolean clicked;
  boolean showFire;
  float angle;

  Raket(int xin, int yin) {
    x = xin;
    y = yin;
  }

  void display() {
    rectMode(CENTER);
    pushMatrix();
    translate(x+b/2, y+h/2);
    rotate(angle);
    if (clicked) {
      fill(255);
      rect(0, 0, b, h);
    }
    if(showFire){
      rotate(PI);
      image(fireImage, 0, -100);
      rotate(-PI);
      showFire=false;
    }
    image(raketImage, 0, 0);
    popMatrix();
  }

  void clickedDetection() {
    if (mousePressed && mouseX < x + b && mouseX > x && mouseY < y + h && mouseY > y) {
      clicked = true;
    }
  }

  void moveLeft() {    
    angle = -PI/2;
   showFire = true;
    x--;
  }
  void moveRight() {   
    angle = PI/2;    
    showFire = true;
    x++;
  }
  void moveDown() {      
    angle = -PI;
    showFire = true;
    y++;
  }
  void moveUp() {    
    angle =0;
    showFire = true;
    y--;
  }
}

```
