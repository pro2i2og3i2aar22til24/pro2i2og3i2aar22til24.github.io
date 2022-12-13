## Del 3 : Løsningsforslag til  slange af ting, der følger hinanden

```java
Ting[] list = new Ting[50];

void setup(){
  size(500,500);
  for(int i=0; i<list.length ;i++){
    list[i]          = new Ting();
    list[i].velocity = 2 - (float)i/50;
    list[i].size     = 50 -(float)i;
    list[i].c        = 255 - 3*i;
  }
}

void draw(){
  clear();
    list[0].moveToward(new PVector(mouseX,mouseY));
    list[0].display();
  for(int i=1; i<list.length ;i++){
    list[i].moveToward(list[i-1].position);
    list[i].display();
  }
}

class Ting{
  float   c,velocity,size;
  PVector position    = new PVector(width/2,height/2);
  PVector speedVector = new PVector();

   void moveToward(PVector dest){
     speedVector.set(dest.x-position.x,dest.y-position.y);
     speedVector.setMag(velocity);
     position.add(speedVector);
   }

   void display(){
     fill(c);
     noStroke();
     ellipse(position.x,position.y,size,size);  
   }

}

```
