# Opsamling fra forløb 3 - hvad er flow-control, aktivkode fejl og semikolons fejl

## Flow control

I processing´s egen reference arbejder vi nu med emnet "control" - nogle steder ville man kalde det "flow-control":

[https://processing.org/reference/#control](https://processing.org/reference/#control)

Control eller flow-control omhandler styring af rækkefølgen vi afvikler koden.

---

##  Aktivkode fejl og semikolons fejl

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
  if(mouseX > 250)
  {
      background(0);
  }
}
```

Er der noget galt her ?
```java
//vi vil gerne farve skærmen sort hvis musen er i højre side
//hvis den er i venstre side vil vi gerne farve skærmen hvid

//men kun de første 200 frames !!

void setup(){
  size(500,500);
}

int fLimit = 200;

void draw(){
  background(255)
  if(mouseX > 250 && frameCount < fLimit)
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

> ***Oliver's regel : skriv altid første krølleparantes på samme linje som "if"***.    
>>if(condition){    
>>     kode     
>>}
