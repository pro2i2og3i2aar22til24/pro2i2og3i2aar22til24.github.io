# Opsamling fra forløb 3 - if/else, relations operatorer og logiske forlob2_operatorer_og_arbejdsmetode

I processing´s egen reference er arbejder vi nu med emnet "control" - nogle steder ville man kalde de "flow-control":

https://processing.org/reference/#control

Control eller flow-control omhandler på styring af i hvilken rækkefølge vi gerne vil have afviklet koden.

---

Flere laver stadig følgende fejl. For at undgå fejlene er det vigtigt at forstå hvorfor og hvad der er forkert.

Hvad er der galt her?
```java
//vi vil gerne farve skærmen sort hvis musen er i højre side
//hvis den er i venstre side vil vi gerne farve skærmen hvid
void setup(){
  size(500,500);
}

background(255);

void draw(){
  if(mouseX > 250);
  {
      background(0);
  }
}
```

Hvad er galt her?
```java
//vi vil gerne farve skærmen sort hvis musen er i højre side
//hvis den er i venstre side vil vi gerne farve skærmen hvid
void setup(){
  size(500,500);
}

void draw(){
  background(255);
  if(mouseX > 250);
  {
      background(0);
  }
}
```
