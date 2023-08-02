# Refaktorerings eksempel

Før:

```java
int x_bold1=1;
int x_bold2=499;
int x_bold3=1;
int x_bold4=499;

void setup(){
  size(500,500);
}

void draw(){
  clear();

  x_bold1 = x_bold1 + 1;
  x_bold1 = x_bold1%width;
  fill(100);
  ellipse(x_bold1,100,10,10);  

  x_bold2 = x_bold2 + 2;
  x_bold2 = x_bold2%width;
  fill(200);
  ellipse(width-x_bold2,200,10,10);

  x_bold3 = x_bold3 + 2;
  x_bold3 = x_bold3%width;
  fill(150);
  ellipse(x_bold3,300,10,10);

  x_bold4 = x_bold4 + 1;
  x_bold4 = x_bold4%width;
  fill(80);
  ellipse(width - x_bold4,400,10,10);
}
```



Efter:

```java
int x_bold1=1;
int x_bold2=499;
int x_bold3=1;
int x_bold4=499;

void setup(){
  size(500,500);
}

void draw(){
  clear();
  x_bold1 = flytBold(x_bold1, 1);
  x_bold2 = flytBold(x_bold2, 2);
  x_bold3 = flytBold(x_bold3, 3);
  x_bold4 = flytBold(x_bold4, 1);
  tegnBold(x_bold1,100,100);
  tegnBold(width - x_bold2,200,200);
  tegnBold(x_bold3,300,150);
  tegnBold(width - x_bold4,400,80);
}

void tegnBold(int x,int y, int c){
  fill(c);
  ellipse(x,y,10,10);  
}

int flytBold(int x,int x_speed){
  x = x + x_speed;
  x = x%width;
  return x;
}
```
