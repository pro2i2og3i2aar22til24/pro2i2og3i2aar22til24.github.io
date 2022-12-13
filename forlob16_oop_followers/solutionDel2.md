## Del 2 : Løsningsforslag til - Lav en ting, der følger en anden ting, der følger en tredje som følger musen

```java
Ting t = new Ting();
Ting t1 = new Ting();
Ting t2 = new Ting();

void setup(){
  size(500,500);  
  t.magnitude = 1;
  t1.magnitude = 0.75;
  t2.magnitude = 0.5;
}

void draw(){
 clear();
 t.move(mouseX,mouseY);
 t.display();
 t1.move(t.pos.x,t.pos.y);
 t1.display();
 t2.move(t1.pos.x,t1.pos.y);
 t2.display();
}

class Ting{
  float   magnitude = 1;
  PVector pos = new PVector(250,250);
  PVector speed = new PVector(1,1);

  void move(float destX, float destY){
    speed.set(destX-pos.x,destY-pos.y);
    speed.setMag(magnitude);
    pos.add(speed);
  }

  void display(){
    ellipse(pos.x,pos.y,10,10);  
  }  
}
```
