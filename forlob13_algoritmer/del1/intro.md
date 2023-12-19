# Forløb 13 
## Introduktion til algoritmer og kørselstiden

#### Om algoritmer
Algoritmemønstre: definerede procedurer til at løse et problem.
- At skulle finde et specifikt element i en samling af elementer
- At se om der forbindelse imellem to punkter og finde den korteste eller billigste sti
- At skulle sortere noget
- At skulle finde det mest optimale træk
- At skulle kryptere noget
- At skulle tjekke om noget kolliderer
Et algoritmemønster udtrykker en gentagelig, trin‐for‐trin løsning på tværs af
programmeringssprog – dvs. uafhængigt af den konkrete implementering i fx Java, C#, Python eller Javascript.

#### Om kørselstiden
En algoritme vokser på en specifik måde i forhold til forbrug af tid og rum/memory - ud fra antallet af input/muligheder/elementer.
Man vil ofte gerne kunne definere en øvre grænse for en algoritmes forbrug – hvor slemt kan det blive, hvis man benytter denne algoritme?
Vi skal prøve at bygge et lille website, der beregner kørselstider for forskellige algoritmer: 

![](runtime.png)

----------------------------------------------------------------------------------------------------------------------------------------------------------------------

## Dagens opgave - målinger af kørselstid,- og tilnærmede funktioner 

Hele dagens arbejde laves, gemmes og uploades til lectio-afleveringen "Algoritme-intro".
I skal aflevere minimum opgave a,b og c.
Glædelig jul og god fornøjelse ;-)

----------------------------------------------------------------------------------------------------------------------------------------------------------------------

#### Opgave A : Koden, og vurdering af kørselstid

[Anvende dette website som udgangspunkt : bubble.html](bubble.html)

A1 Hvilken kørselsfunktion er tættest på den du ser i målt på - bubble.html ?

A2 Kig på source-koden og vurder hvorfor kørselsfunktionen ser ud som den gør ?

----------------------------------------------------------------------------------------------------------------------------------------------------------------------

#### Opgave B : Sorterings-algoritme kørselstid

B3 Implementer sorterings-metoden bubble-sort eller en anden sorteringsalgoritme (brug en kupi af bubble.html). Vælg meningsfulde input-arrays. Se animationen nedenfor: 

![](BubbleSort_Avg_case.gif)


B4 Hvilken kørselsfunktion ligger tættest på de data ser målt ?

B5 Kig på koden og vurder hvorfor kørselsfunktionen ser ud som den gør ?

----------------------------------------------------------------------------------------------------------------------------------------------------------------------

#### Opgave C : Binær søgning (i meget store arrays)

C6 Forklar hvordan binær-søgning virker, imodsætning til lineær-søgning.

![](binary_search.gif)

C7. Implementer input data, der består af tilfældige sorterede tal i tiltrækkelig store mængder 

C8 Hvilken kørselsfunktion ligger tættest på de data ser målt ?

C9 Kig på koden og vurder hvorfor kørselsfunktionen ser ud som den gør ?

----------------------------------------------------------------------------------------------------------------------------------------------------------------------

#### Opgave D  Udtænk og byg en hurtig måde at indsætte og finde tal i et meget stort array

Og implementer denne metode

----------------------------------------------------------------------------------------------------------------------------------------------------------------------
