# SRC - infografik 

Studieretningscasen er en fordybelse og undersøgelse af et specifikt infografik-design ved hjælp af jeres to studieretningsfag "kommunikation og it" og "programmering". I skal aflevere en rapport og afslutningsvis præsentere jeres vigtigste konklusioner i en mundtlig prøve.  
    
Der gives en samlet karakter for rapport og mundtlig præstation.  


## Krav til koden

Der er følgende krav til infografik-programmet:

- koden skal skrives i processing
- i skal anvende rigtig data fra en fil, f.eks. csv eller txt
- grafiken skal være interaktiv 
- der skal indgå animationer

## Forslag til data

[uddannelse.csv](uddannelse.csv) : 18 - 25 åriges ungdomsuddannelser efter køn, uddannelsesstatus og tid  

[indkomst.csv](indkomst.csv) : løn efter lønkomponenter, lønmodtagergruppe, aflønningsform, sektor, køn, uddannelse og tid

[internethandel.csv](internethandel.csv) : tøj, sport- og fritidsudstyr internetkøb inden for sidste år efter produkt, type og tid

find andet data her : https://www.dst.dk/da/Statistik/emner

-----------------------------------------------------------------------------------------------

## EKSEMPEL:

### Færdigt program
<iframe width="560" height="315" src="https://www.youtube.com/embed/GCRt13MC7rE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

### Kode 

Koden nedenfor henter og behandler data fra "uddanelse.csv", så den senere kan bruges i infografik-koden:

```java
int selectedData = 1;//drenge =1, piger = 2, alle = 3

Data[] drenge = new Data[17];
Data[] piger  = new Data[17];

class Data {
  String aarstal; 
  float total, studenter, elever, andet;  
  
  Data(String y) {
    aarstal = y;
  }
  
  float procent() {   
    return 100*(studenter + elever)/total;
  }
}

void setup() {
  String[]   linjer  = loadStrings("uddannelse.csv");

  for (int linjeNr=0; linjeNr<linjer.length; linjeNr++) {
    String[] words = linjer[linjeNr].split(",");

    for (int kolonne=2; kolonne<19; kolonne++) {
      if (linjeNr==2) { 
        drenge[kolonne-2]  = new Data(words[kolonne]);
        piger[kolonne-2]   = new Data(words[kolonne]);
      }  
      if (linjeNr==4)  drenge[kolonne-2].total    = Integer.parseInt(words[kolonne]);
      if (linjeNr==5)  drenge[kolonne-2].studenter= Integer.parseInt(words[kolonne]);
      if (linjeNr==6)  drenge[kolonne-2].elever   = Integer.parseInt(words[kolonne]);
      if (linjeNr==7)  drenge[kolonne-2].andet    = Integer.parseInt(words[kolonne]);

      if (linjeNr==9)  piger[kolonne-2].total     = Integer.parseInt(words[kolonne]); 
      if (linjeNr==10) piger[kolonne-2].studenter = Integer.parseInt(words[kolonne]);            
      if (linjeNr==11) piger[kolonne-2].elever    = Integer.parseInt(words[kolonne]);
      if (linjeNr==12) piger[kolonne-2].andet     = Integer.parseInt(words[kolonne]);
    }
  }
  size(500, 500);
}
```