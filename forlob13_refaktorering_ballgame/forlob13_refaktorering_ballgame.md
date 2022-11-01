# Forløb 13
## Øvelse i refaktorering af udleveret kode

### Afleveringen: Indskriv hvad i har lært i logbog eller forklaring af løsning

----------------------------------------------------------

Vigtige emner :
- Refaktorering af kode til funktioner
- Funktions-scope og uafhængig/afhængig af ydre scope

----------------------------------------------------------

#### Opg 1: Gennemgå nedenstående kode med makker så du/i er sikker på hvordan den virker, skriv eventuelt kommentarer i koden:
```java
float xBall,yBall,sizeBall=20,angleBall=PI/8,speedBall=2;
float xGoal=100,yGoal= 100,sizeGoal=20;
void setup(){
  size(500,500);
  xBall = width/2;yBall = height/2;
}
void draw(){
  clear();
  fill(255,0,0);
  ellipse(xGoal,yGoal,sizeGoal,sizeGoal);
  xBall+=speedBall*cos(angleBall);
  yBall+=speedBall*sin(angleBall);
  fill(255);
  ellipse(xBall,yBall,sizeBall,sizeBall);
  if(dist(mouseX,mouseY,xBall,yBall)<sizeBall){
    angleBall = atan2(yBall-mouseY,xBall-mouseX);
    xBall+=cos(angleBall)*sizeBall-(-mouseX+xBall);
    yBall+=sin(angleBall)*sizeBall-(-mouseY+yBall);
  }
  if(xBall<0){angleBall =PI-angleBall;xBall = 0;}
  if(xBall>width){angleBall=PI-angleBall; xBall = width;}
  if(yBall<0){angleBall = -angleBall;yBall = 0;}
  if(yBall>height){angleBall = -angleBall; yBall = width;}
  if(dist(xBall,yBall,xGoal,yGoal)<sizeGoal){
    textSize(30);
    text("YOU WON!",width/2,height/2);
    speedBall = 0;   
  }
  if(mousePressed){
    xBall = width/2;yBall = height/2;
    speedBall = 2;
  }
}
```
----------------------------------------------------------

#### Opg 2:
Refaktorer koden fra opgave 1 således den indeholder nye funktioner og kommer til at se ud på følgende måde (funktionerne er selvfølgelig ikke vist):
```java
float xBall,yBall,sizeBall=20,angleBall=PI/8,speedBall=2;
float xGoal=100,yGoal= 100,sizeGoal=20;

void setup(){
  size(500,500);
  resetBallGame();
}

void draw(){
  clear();
  drawGoal();
  drawBall();
  moveBall();
  wallCollision();
  if(mouseHitBall()){
    ballAngleAwayFromMouse();
  }
  if(ballHitGoal()){
    winnerScreen();
  }
  if(mousePressed){
    resetBallGame();
  }
}
```
----------------------------------------------------------

#### Opg 3:
Efter opgave 2, er alle funktioner afhængige af det ydre scope!. Det er endnu ikke et problem, men hvis man ønsker flere bolde eller flere mål, kan
det blive et problem. Prøv at refaktorer ALLE jeres funktioner så de ikke længere er afhængig af et ydre scope.
Se nedenfor hvor jeg har refaktoreret "drawGoal", "drawBall" og "moveBall":

```java
float xBall,yBall,sizeBall=20,angleBall=PI/8,speedBall=2;
float xGoal=100,yGoal= 100,sizeGoal=20;

void setup(){
  size(500,500);
  resetBallGame();
}

void draw(){
  clear();
  drawGoal(xGoal,yGoal,sizeGoal);
  drawBall(xBall,yBall,sizeBall);
  xBall = moveBallX(angleBall,speedBall,xBall);
  yBall = moveBallY(angleBall,speedBall,yBall);
  wallCollision();
  if(mouseHitBall()){
    ballAngleAwayFromMouse();
  }
  if(ballHitGoal()){
    winnerScreen();
  }
  if(mousePressed){
    resetBallGame();
  }
```
