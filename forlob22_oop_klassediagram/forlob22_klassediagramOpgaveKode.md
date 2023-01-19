## funktionerne: setup, draw og mousePressed

```java
ArrayList<Terning> terninger = new ArrayList<Terning>();

void setup() {
  size(500, 500);  
  terninger.add(new Terning(100, 100));
  terninger.add(new Terning(100, 250));
  terninger.add(new FalskTerning(100, 400));
  terninger.add(new Terning(250, 100));
  terninger.add(new Terning(250, 250));
  terninger.add(new FalskTerning(250, 400));
}

void draw() {
  clear();
  for (Terning t : terninger) {
    t.display();
  }
}

void mousePressed() {
  for (Terning t : terninger) {
    t.kastTerning();
  }
}
```

--------------------------------------------------------------------------------------------------------

## klassen: Tegning
```java
class Terning{
  int x,y;
  int min=1, max=6;
  int kast = 1;
  TerningeGrafik displayer = new TerningeGrafik();

  Terning(int xin, int yin){
   x = xin; y = yin;
  }

  void kastTerning(){
    kast = (int)random(min,max+1);
  }

  void display(){
    displayer.display(x,y,kast);
  }
}
```


--------------------------------------------------------------------------------------------------------


## klassen: FalskTerning
```java
class FalskTerning extends Terning{

  //hvis super-klassen har en konstruktor
  //skal man kalde den fra sub-klassen!!
  FalskTerning(int xin, int yin){
   super(xin,yin);
   min = 5;
   max = 6;
  }
}
```


--------------------------------------------------------------------------------------------------------


## klassen: TerningeGrafik
```java
class TerningeGrafik{

  void display(int x, int y, int visKast){
    noFill();
    stroke(255);
    rect(x-50,y-50,100,100);
    fill(255);
    if(visKast==1){ ellipse(x,y,10,10);  }
    if(visKast==2){ ellipse(x-30,y-30,10,10);ellipse(x+30,y+30,10,10);}
    if(visKast==3){ ellipse(x,y,10,10);ellipse(x-30,y-30,10,10);ellipse(x+30,y+30,10,10);}
    if(visKast==4){ ellipse(x-30,y-30,10,10);ellipse(x+30,y+30,10,10);ellipse(x+30,y-30,10,10); ellipse(x-30,y+30,10,10);}
    if(visKast==5){ ellipse(x,y,10,10);ellipse(x-30,y-30,10,10);ellipse(x+30,y+30,10,10);ellipse(x+30,y-30,10,10); ellipse(x-30,y+30,10,10);}
    if(visKast==6){ ellipse(x-30,y,10,10);ellipse(x+30,y,10,10);ellipse(x-30,y-30,10,10);ellipse(x+30,y+30,10,10);ellipse(x+30,y-30,10,10); ellipse(x-30,y+30,10,10);}
  }
}
```
