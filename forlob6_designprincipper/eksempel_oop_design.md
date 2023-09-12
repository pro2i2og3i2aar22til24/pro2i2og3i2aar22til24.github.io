## Eksempel på design anvender to oop-principper:

- ***program to an interface, not implementations: Skriv kode, der afhænger af abstraktioner (interfaces) snarere end specifikke implementeringer.***
- ***favor composition over inheritance: Foretræk sammensætning af klasser over at bruge arv.***

```java
//Begge design-principper :  Her anvendes komposition istedet for nedarvning && Og interface istedet for direkte implentation
Knap k;

void setup(){
  //Her skabes en anonym-klasse - lidt avanceret!
 k = new Knap(new Action(){ public void doAction(){ println("min action!");}});
}

void mousePressed(){
  k.doAction();  
}

void draw(){}

class Knap{
 Action a; 
 Knap(Action customAction){ this.a = customAction;}
 void doAction(){ a.doAction();}
}

interface Action{
 public void doAction(); 
}
```