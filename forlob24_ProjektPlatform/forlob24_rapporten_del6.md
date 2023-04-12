# Trin 6: Programmerings rapporten/synopsen 

Indholdet der beskrives her er det samme som i eksamensprojektet

## Hvad indeholder programmeringsrapporten/synopsen

Omfang 5 til 8 normalsiders tekst, eksklusiv billeder og bilag.

- **forside** : *relevant information vedrørende afleveringen*
- **kort abstract** : *så man kort kan orientere som om opgavens indhold*
- **problemformulering** : *kortfattet præcisering af problem der undersøges/løses*
- **kravspecifikation og designspecifikation** : *kravspec. er liste over funktionskrav, designspec. er visualisering design krav*
- **funktionsbeskrivelse** : *ikke-teknisk gennemgang af det endelige produkts skærmlayout og funktionalitet*
- **dokumentation af programmet** : *teknisk beskrivelse af programmet med dertilhørende diagrammer*
- **test af programmet** : *overholder programmet kravspec., eventuelt performance og/eller brugertest*
- **konklusion** : *udfordringer, potentielle forbedringer og/eller efterfølgender version*
- **bilag** : *programmets kode og andet relevant*

-----------------------------------------------------------------------------------------------------------------------------------------------------------

## Tekniske diagrammer 

Overordnet findes der to forskellige kategorier af diagrammer: **struktur-diagrammer** og **adfærds-diagrammer**.     
Man kan tegne diagrammerne i hånden, eller anvende et værktøj. Jeg har selv brugt: [https://www.smartdraw.com/](https://www.smartdraw.com/)

## Klassediagrammet for platformer-spillet 
Der skal være et klassediagram over hele programmet! Her er et bud på hvordan i kan tegne jeres klassediagram:

<img src="klasseDiagram.png" width="50%">

## Sekvens diagrammer 
Som alternativ til flowcharts kan man anvende sekvens-diagrammer. Disse kan vise aktive objekter og dertilhørende funktions-kald.  
Nedenfor ses et eksempel på et sekvensdiagram over kollisioner med fjender:

<img src="sequence_diagram.png" width="50%">

## Alternative diagrammer og tegninger
Det kan være nødvendigt at tegne eller opfinde egne diagrammer for at illustrere en del af programmet. 
F.eks. ved kollisions-detektionen mellem firkanter og punkter, se her (kilde : https://happycoding.io/tutorials/processing/collision-detection):

<img src="punkt_boks.png" width="50%">

## Aktivitetsdiagrammer for platformer-spillet ( mere næste gang ... )

I bør have flere aktivitetsdiagrammer og/eller flowcharts. F.eks. kan i de anvendes til at beskrive:

- *skærm-flow* : diagram over spillets flow. startskærm, til spille-skærm osv.
- *tile-kollision og tyngdekraft* : hvordan fungerer koden når man hopper og rammer en tile
- *animation* : ... 

## Pseudokode for platformer-spillet ( mere næste næste gang ...)

I bør anvende pseudokode når i skal beskrive algoritmeagtige dele af jeres program. F.eks. kunne i anvende pseudokode til:

- *map-generering* : generering af banen. Hvordan bliver jeres teksfil fortolket og lavet om til tile-objekter eller lignende.
- ...
