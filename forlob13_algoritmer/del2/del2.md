# Forløb 13
## Tidsfunktionen teoretisk og order of growth

--------------------------------------------------------------------------------------------------------------------------------------

***Repetition fra sidst:***

- ***En algoritme er en opskrift til løsning af et problem***. Man møder ofte algoritmer implementeret i computerprogrammer, da computere kan gøre rigtig mange ting meget hurtigt. Der er mange typer algoritmer dem man møder mest i medierne har at gøre med AI, personlig-data og reklame. Mere klassiske algoritmer er f.eks. sorterings og søge-algoritmer. 

- ***En god algoritme - løser et problem hurtigt***. Hastigheden kan selvfølgelig måles. Hastigheden er oftest afhængig af problemet størrelse. Det betyder igen oftest størrelsen af inputtet.

- ***Tidsfunktionen - er den tid det tager algoritmen at løse problemet, som funktion af inputtet størrelse***. 

--------------------------------------------------------------------------------------------------------------------------------------

## Hvodan bestemmer man tidsfunktionen teoretisk? order of growth

Det siger sig selv, at det er meget svært, at bestemme den eksakte tidsfunktion teoretisk, der er alt for mange ting man skal tage højde for computerens-hardware, programmeringssprog, andre programmer,- måske ligefrem rummets temperatur! 

Istedet at finde den eksakte funktion finder man en funktion, der bevæger sig (udviklier sig, har samme hældning) som tidsfunktionen ved meget store input!

Man kalder denne tilnærmede funktion tidsfunktionens; Order of growth!!!

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

## Eksmepel 2 : teoretisk bestemmelse af tidsfunktionen for binær-søgning

Worst case koster dette lg(N) gæt!

--------------------------------------------------------------------------------------------------------------------------------------

## Opgave 1

En typisk problemstilling der kræver en god algoritme: er at "gemme" og "hente" data fra meget store filer.   
Udtænk en teoretisk plan for hvordan man kan lave et computerprogram, hvis filen består af tal der er linje-sepereret.

- beskriv hvordan programmet virker
- skriv pseudokode for dine to funktioner "gem" og "hent"
- analyser dig frem til order of growth for algoritmernes tidsfunktioner

--------------------------------------------------------------------------------------------------------------------------------------

## Opgave 2

En meget hurtigere måde at løse problemet på er at vælge en anden data-struktur, istedet for en liste. 
Nemlig: [https://www.baeldung.com/cs/binary-search-trees](https://www.baeldung.com/cs/binary-search-trees)

- implementer et program, der anvender et binært søgetræ til at gemme og hente data fra.
- i denne omgang behøver i ikke gemme det hele i en fil...




