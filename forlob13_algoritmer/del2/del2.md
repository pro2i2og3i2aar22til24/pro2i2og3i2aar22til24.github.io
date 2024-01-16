# Forløb 13
## Tidsfunktionen teoretisk og order of growth

---

**Repetition fra sidst:**

- _En algoritme er en opskrift til løsning af et problem._ Man møder ofte algoritmer implementeret i computerprogrammer, da computere kan gøre rigtig mange ting meget hurtigt. Der er mange typer algoritmer, dem man møder mest i medierne, har at gøre med AI, personlig data og reklame. Mere klassiske algoritmer er f.eks. sorterings- og søgealgoritmer.

- _En god algoritme løser et problem hurtigt._ Hastigheden kan selvfølgelig måles. Hastigheden er oftest afhængig af problemets størrelse. Det betyder igen oftest størrelsen af inputtet.

- _Tidsfunktionen er den tid, det tager algoritmen at løse problemet, som funktion af inputtets størrelse._

---

## Hvordan bestemmer man tidsfunktionen teoretisk? Order of Growth

Det siger sig selv, at det er meget svært at bestemme den eksakte tidsfunktion teoretisk; der er alt for mange ting man skal tage højde for: computerens hardware, programmeringssprog, andre programmer - måske ligefrem rummets temperatur!

I stedet for at finde den eksakte funktion, finder man en funktion, der bevæger sig (udvikler sig, har samme hældning) som tidsfunktionen ved meget store input!

Man kalder denne tilnærmede funktion tidsfunktionens Order of Growth!!!

## [Eksempel 1: bubble-sort - teoretisk bestemmelse af tidsfunktion](eksempel1.md)

## [Eksempel 2: binary-search - teoretisk bestemmelse af tidsfunktion](eksempel2.md)

---

## Opgave 1

En typisk problemstilling der kræver en god algoritme: er at "indsætte", "finde" og "save" data i meget store filer.  
Udtænk en teoretisk plan for hvordan man kan lave et computerprogram, hvor filen består af tal der er linje-separerede.

- Beskriv hvordan programmet virker
- Skriv pseudokode for dine to funktioner "indsæt", "find" og "save"
- Analyser dig frem til order of growth for algoritmernes tidsfunktioner

---

## Opgave 2

Der findes en datastruktur, der i teorien fungerer hurtigere til at "indsæt" og "finde" i end listen.
Nemlig: [Binary Search Trees](https://www.baeldung.com/cs/binary-search-trees)

- Implementer et program, der anvender et binært søgetræ til at "indsætte" og "finde" data i.
- Prøv eventuelt at udtænke en måde at gemme træet, f.eks. i en tekstfil

## Opgave 3 (frivillig)

Hvis man kunne tænke sig at prøve en endnu bedre og mere avanceret datastruktur, så er "2-3trees" et godt bud.   
Lav da istedet opgave 2 , bare med 2-3trees ;-)

