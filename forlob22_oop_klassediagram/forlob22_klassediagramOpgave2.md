# Opgave i klassediagrammer 2

1. Lav et klassediagram for en "Car" klasse med egenskaberne model, farve, og antal døre. Lav også et klassediagram for en "Engine" klasse med egenskaberne slagvolumen og antal cylindere. Brug komposition til at forbinde "Car" klassen med "Engine" klassen, så hver bil har en motor. Implementer også metoden "startEngine()" i "Engine" klassen og "drive()" metoden i "Car" klassen, der skal udskrive en besked om at motoren er startet og bilen kører.

2. Lav et klassediagram for en "Bird" klasse med egenskaberne farve og vægt. Lav også et klassediagram for en "Flyable" klasse med metoden "fly()". Brug nedarvning til at lave en "Eagle" klasse, der arver fra "Bird" klassen og implementerer "Flyable" klassen. Implementer også en "sing()" metode i "Bird" klassen, der skal udskrive en besked om at fuglen synger.
Du må gerne lave et hieraki af "Flyable" klasser.

3. Lav et klassediagram for en "Shape" klasse med egenskaben farve. Lav også klassediagrammer for "Circle" og "Rectangle" klasserne, der arver fra "Shape" klassen og har egenskaberne radius (for Circle) og bredde og højde (for Rectangle). Implementer også "calculateArea()" metoden i begge klasserne, der skal returnere arealet af figuren.

4. Lav et klassediagram for en "Employee" klasse med egenskaberne navn, alder og løn. Lav også et klassediagram for en "Manager" klasse, der arver fra "Employee" klassen og har en ekstra egenskab for antal ansatte de er ansvarlig for. Brug komposition til at lave en "Department" klasse, der har en liste af "Employee" objekter og en "Manager" objekt
