# Platformer projektet

Dette er jeres første rigtige projekt i programmering. I slutningen af projektet skal i aflevere et fuldt funktionelt objektorienteret platformer spil og en lille veldokumenteret rapport.
Jeg vil løbende komme forbi jeres gruppe og evaluere både jeres arbejde og arbejds-deciplin ;-)
Hjælpemidler er tilladte, men i skal skrive referencer
Nedenfor ses projektets faser:

## 1: Find samme i grupper på to eller tre personer
Skriv en kommentar på aflevering - så jeg kan hvem der er i samme gruppe.

## 2 : Playeren (ingen grafik - spilleren er bare en cirkel eller en firkant i starten)
- *ide (programmering)* : udtænk en passende måde at bevæge og programmere player-objektet på (se krav nedenfor). kode-eksperimenter anbefales.
- *dokumentation* : lav passende dokumentation, klasse-diagrammer og eventuelt andre diagrammer
- *programmering* : det skal være pæn kode. Kan betyde i skal refaktore en del
- *evaluering* : i skal være klare til præsentere jeres arbejde for mig - når jeg kommer forbi jeres gruppe. jeg vil være "hård" og spørge udvalgte direkte til koden, så alle skal forstå den!

Links til hjælp og inspiration:     
[2d-Platformer: INSPIRATION : Se video om indy-spillets gameplay og sans for player-bevægelser](https://www.youtube.com/watch?v=yorTG9at90g)     
[Tag udgangspunkt i følgende skabelon](forlob24_kodeforslag_del1.md)   

## Mere om player movement
Der er følgende krav til hvordan spilleren skal bevæges:
- Spilleren skal have et realistisk løb med acceleration og deacceleration, når man starter og slutter med løbet
- Spilleren skal kunne falde og hoppe på en realistisk måde, med en tyngdekrafts-accelerations-påvirkning

*Forslag*: Man kan opbygge selve fysik-simuleringen vha. tre vektorer en position, en hastighed og en acceleration.
```
pos.add(vel);
vel.add(acc);
acc.set(0,0);
```
Alle bevægelser kan nu laves ved at lave følgende små ændringer i accelerationen.   
Friktioner kan opnåes ved at formindske hastighedsvektoren med en konstant.   


Se følgende eksempel:   

<iframe width="320" height="560" src="https://youtu.be/9f2iHI3YEKY" title="drej" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>





## Næste gang : Tiles

## Næste-næste gangDel : Kollision med tiles og spiller
