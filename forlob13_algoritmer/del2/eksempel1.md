## Eksempel 1 : teoretisk bestemmelse af tidsfunktion for bubble-sort sortering

Det skal lige nævnes at bubble-sort ikke er nogen god sorterings-algoritme, den bliver kun brugt ifm. undervsning, som et eksempel på en algoritme.

#### Her en illustration af bubble-sort sorterings algoritmen:
![b-sort](pic_bsort.gif)

#### Her pseudo-kode for bubblesort:
- Kør alle listens elementer igennem
    - Hver gang to elementer står i forkert rækkefølge byttes de rundt
- Gentag indtil der ikke længere er ombytninger

#### Bestemmelse af worst-case antal sammenligninger og ombytninger:
Der er selvfølgelig mange forskellige ting, der tager tid når man implementerer algoritmen som et computerprogram, men den del af koden, der ar afhængig af inputet vil tage længst tid bare man laver inputet stort nok, og derfor er det denne del af algoritmen vi kigger på. 
I linje to af pseudokoden, kan man læse at algoritmen kun gør to forskellige ting: enten bytter om, eller sammenligner.
Så vi leder derfor efter worstcase anatl sammenligninger og worst-case antal ombytninger, da de vil repræsentere kørselstidsfunktionens udvikling ved store input.

Worst case for en sorteringsfunktion er ofte at tallene står i omvendt rækkefølge så vi forstiller os en talrække der skal sorteres fra mindst til størst. For hver gang bubble-sort "bobbler" den det største tal på plads, der endnu ikke er sorteret. 
For hvert gennemløb koster det N sammenligninger, hvor N er antallet af tal.
Der skal laves N gennemløb, hvis der er N tal. Det koster altså worst-case N² sammenligninger

Worst case koster det lidt færrer ombytninger, nemlig N²/2.
Grunden er at der for hver gennemkørsel er en mindre ombytninger (du kan prøve at se om du selv kan lave beregningen).