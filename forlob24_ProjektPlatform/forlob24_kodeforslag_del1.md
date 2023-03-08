# Del 1 : Kodeforlag


```java
PlatformerGame spillet;

void setup() {
   size(1600, 800);
   spillet = new PlatformerGame();
}

void draw() {
   background(100);
   spillet.updateGame();
   spillet.drawGame();
}

void keyPressed(){
  spillet.inputHandler(key);
}
void keyReleased(){
  spillet.inputHandler('x');
}
```

```java
class GameObject {
  PVector position;
  PVector velocity;
  PVector accel = new PVector(0, 0);

  GameObject(PVector pos, PVector vel) {
    position = pos;
    velocity = vel;
  }

  void update() {
    velocity.add(accel);
    position.add(velocity);
  }


  void draw() {
  }
}
```

```java
// den basale beholder-klasse for spillet
// den har for overskuelighedens skyld både update-metode og  draw-metode

class PlatformerGame {
  Player player;

  PlatformerGame() {
    //player = new Player(angiv parametre til Playerens konstruktør);
  }
  void inputHandler(char tast){
    player.inputHandler(tast);
  }

  void updateGame() {
    player.update();
  }

  void drawGame() {
    player.draw();
  }
}
```

```java
class Player extends GameObject {

  // opret relevante datafelter i Player

  // giver fejlmelding da baseklassens konstruktør ikke kaldes (endnu).
  Player() {
    //super(p, v);
  }

  void inputHandler(char tast) {
    // håndter input fra keyboard
  }

  @Override
  void update() {
    super.update(); // kalder først baseklassens update
    // opdater spillerens værdier her
  }

  @Override
  void draw() {
    // lav grafisk output her
  }
}
```
