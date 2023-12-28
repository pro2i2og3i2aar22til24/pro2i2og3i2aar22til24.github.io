# Eksempel 1: Teoretisk Bestemmelse af Tidsfunktion for Bubble-Sort Sortering

Det skal lige nævnes, at bubble-sort ikke er nogen effektiv sorteringsalgoritme; den bruges kun i undervisningssammenhænge som et eksempel på en algoritme.

## Illustration af Bubble-Sort Sorteringsalgoritmen:
![Bubble Sort](pic_bsort.gif)

## Pseudokode for Bubble-Sort:
- Kør alle listenselementer igennem
  - Hver gang to elementer står i forkert rækkefølge, byttes de rundt
- Gentag indtil der ikke længere er ombytninger

## Bestemmelse af Worst-Case Antal Sammenligninger og Ombytninger:
Der er mange aspekter af koden, der tager tid ved implementeringen af algoritmen som et computerprogram. Den del af koden, der afhænger af inputtet, vil tage længst tid, især når inputtet er stort. Derfor fokuserer vi på denne del af algoritmen.

I linje to af pseudokoden kan man læse, at algoritmen kun udfører to forskellige handlinger: den bytter om eller sammenligner. Vi leder derfor efter worst-case antal sammenligninger og worst-case antal ombytninger, da de repræsenterer udviklingen af kørselstidsfunktionen ved store input.

Worst case for en sorteringsfunktion opstår ofte, når tallene står i omvendt rækkefølge. Vi forestiller os en talrække, der skal sorteres fra mindst til størst. For hvert gennemløb koster det N sammenligninger, hvor N er antallet af tal. Der skal laves N gennemløb, hvis der er N tal. Det koster altså worst-case N² sammenligninger.

Worst case koster det lidt færre ombytninger, nemlig N²/2. Grunden er, at der for hver gennemkørsel er en ombytning mindre (du kan prøve at se, om du selv kan lave beregningen).


#### Order of growth

Da både sammenligninger og ombytninger foregår i kvadratisk tid er order of growth for worst case ligeledes : N²