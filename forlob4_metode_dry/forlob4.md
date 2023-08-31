# DRY - En programmeringsmetode

Når man programmerer, er det afgørende, at koden er letlæselig, så den kan ændres og vedligeholdes med lethed. Hvis koden indeholder gentagelser, opstår der to problemer:

- Problem 1 : Det bliver mere besværligt at læse og forstå.
- Problem 2 : Ændringer skal foretages flere steder, hvis der opstår fejl.

Dette fører os til princippet ***D.R.Y: Don't Repeat Yourself.***

-----------------------------

## To løsningsmetoder

Men hvordan løser man problemet med kodegentagelse? Vi har faktisk to meget smarte værktøjer i rygsækken ;-)

- Metode 1 : Lav en ny superklasse, hvis der er flere klasser hvor funktionalitet og kode gentages
- Metode 2 : Lav en ny funktion, hvis der er kode, der gentages. Det der varierer kan sendes som argumenter til funktionen

------------------------------

[Opgave 1 - refaktorering af skydespil](opgave_skydespil.md)

[Opgave 2 - refaktorering af brandmandsspillet](opgave_brandmandsspil.md)