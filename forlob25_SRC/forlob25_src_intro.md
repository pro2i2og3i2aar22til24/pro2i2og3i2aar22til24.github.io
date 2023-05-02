# SRC - infografik 

Studieretningscasen er en fordybelse og undersøgelse af et specifikt infografik-design ved hjælp af jeres to studieretningsfag "kommunikation og it" og "programmering". I skal aflevere en rapport og afslutningsvis præsentere jeres vigtigste konklusioner i en mundtlig prøve.  

Der gives en samlet karakter for rapport og mundtlig præstation.  

----------------------------------------------------------------------------------------------------------------------------------------------

## Programmering i rapporten

Helt konkret er der to underspørgsmål i opgaveformuleringen hvor i direkte skal anvende programmeringsfaget.

**Gør rede for objektorienterede nøglebegreber (redegørende niveau)**:     
Dette første underspørgsmål er det laveste taksonomiske niveau. Her skal i udvælge vigtige begreber indenfor objektorienteret programmering og forklare dem. Det er en god ide at udvælge noget i rent faktsik bruger i designet af jeres program. I skal selvfølgelig have kilder, der underbygger jeres påstande.

**Brug forundersøgelse, jeres viden om interaktionsdesign og det objektorienterede paradigme til at designe en interaktiv infografik... (anvendelse/analyse niveau)**:          
Det andet spørgsmål er beskrivelse og design af jeres program. Her er diagrammer selvfølgelig også en vigtig ting (se platformer-forløbet).

### Forslag til kilder i programmering

Dette er kun forslag til kilder, i skal selvfølgelig helst supplere med flere eller vælge helt andre. 

- Om klasser og objekter : Javabog af Jakob Nordfalk kap 3.1
- Om nedarvning : Javabog af Jakob Nordfalk kap 5.1
- Om polymorfi : Javabog af Jakob Nordfalk kap 5.2
- Se : javabog.dk

----------------------------------------------------------------------------------------------------------------------------------------------

## Krav til koden og programmet

Der er følgende krav til infografik-programmet:

- koden skal skrives i processing
- i skal anvende rigtig data fra en fil, f.eks. csv eller txt
- i skal anvende en objektorienteret programopbygning
- grafiken skal være interaktiv 
- der bør indgå animationer

### Forslag til data

[uddannelse.txt](uddannelse.txt) : 18 - 25 åriges ungdomsuddannelser efter køn, uddannelsesstatus og tid  

Find andet data på statistikbanken.dk, se her hvordan:

<iframe width="560" height="315" src="https://www.youtube.com/embed/36tCXzs0e7c" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>


### Eksempel

Nedenfor ses et eksempel på et infografikporgram, der anvender data-filen "uddannelse.txt".   
Programmet viser et søjlediagram for hvor mange piger/drenge i aldersgruppen 18-25 år, der enten har færdiggjort en ungdomsuddannelse eller er igang med det. 
Ved at trykke på K eller M kan man vælge henholdsvis at se histogrammet for piger eller drenge. 
Selve diagrammet er animeret, så det starter med at være gennemsigtigt og bliver langsomt tydligere.

Vigtigt : vær opmærksom på at denne løsning ikke er baseret på nogen målgruppe. 

### Færdigt program
<iframe width="560" height="315" src="https://www.youtube.com/embed/LTdeRkDg3SQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

### Kode 

Koden nedenfor henter og behandler data fra "uddanelse.txt", så den senere kan bruges i infografik-koden.   
De to arrays "drenge" og "piger" indeholder objekter af klassen Data. Ved at gemme objekterne i en ArrayList kan man anvende et loop til at hente hvert enkelt objekt og efterfølgende f.eks. tegne søjler i et søjlediagram: 

```java
ArrayList<Data> dataListe = new ArrayList<Data>();
String selected = "K";  
int animationFrame = 0;  

class Data{
   String kon;   int aar; float done, elev, andet;
   int statusProcent(){return int(100*(done+elev)/(done+elev+andet));} //uddannet eller i uddannelse
}

void setup(){
  String[] linjer = loadStrings("uddannelse.txt");
 
  for(int i=1 ; i<linjer.length ; i++){
    String[] linjeData = linjer[i].split("\t");
    Data data      = new Data();
    data.kon       = linjeData[2]; 
    data.aar       = Integer.parseInt(linjeData[0]);
    data.done      = Integer.parseInt(linjeData[3]);
    data.elev      = Integer.parseInt(linjeData[4]);
    data.andet     = Integer.parseInt(linjeData[5]);
    dataListe.add(data);
  }
  size(500,500);
}

void draw(){
 clear();
 float y=3;    animationFrame++;
 fill(255);  text("GENNEMFØRT ELLER IGANG MED UNGDOMSUDDANNELSE 2005-2021 18-21 ÅR",20,20);
 fill(255);  text("VALGT KØN = " + selected,20,40); 
  if(keyPressed){ selected = key+""; selected = selected.toUpperCase(); animationFrame = 0;} //Tryk på "K" eller "M"
  for(Data d : dataListe){
    if(d.kon.contains(selected)){
      fill(255,animationFrame);  rect(20,20*y,(d.statusProcent()-60)*10,20);
      fill(0,animationFrame);    text(d.aar + " : " +d.statusProcent()+"%",24,20*(y+1)-4);
      y++;
    }  
  }
}
```
