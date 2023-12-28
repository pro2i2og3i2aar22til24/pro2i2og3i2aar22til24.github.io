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

## [Eksempel 1 : bubble-sort   - teoretisk bestemmelse af tidsfunktion](eksempel1.md)

## [Eksempel 2 : binary-search - teoretisk bestemmelse af tidsfunktion](eksempel2.md) 

--------------------------------------------------------------------------------------------------------------------------------------

## Opgave 1

En typisk problemstilling der kræver en god algoritme: er at "gemme" og "hente" data fra meget store filer.   
Udtænk en teoretisk plan for hvordan man kan lave et computerprogram, hvis filen består af tal der er linje-sepereret.

- beskriv hvordan programmet virker
- skriv pseudokode for dine to funktioner "gem" og "hent"
- analyser dig frem til order of growth for algoritmernes tidsfunktioner

--------------------------------------------------------------------------------------------------------------------------------------

## Opgave 2

En meget hurtigere måde at løse problemet på er at vælge en anden data-struktur at arbejde med istedet for en liste. 
Nemlig: [https://www.baeldung.com/cs/binary-search-trees](https://www.baeldung.com/cs/binary-search-trees)

- implementer et program, der anvender et binært søgetræ til at gemme og hente data fra.
- prøv ligeledes at udtænke en måde at gemme træet,- f.eks. i en tekst fil




