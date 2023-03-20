# Trin 2: LAV METODE TIL AT INDLÆSE TILES OG LAV TILE-KLASSE

Man kan tænke et tilemap som en txt-fil, hvor forskellige tal karakterer eller tal repræsenterer dele af en tile.

Brug gerne metoden loadStrings(”map.txt”), loadStrings kan indlæse fra en simpel textfil, fx map.txt. Den kaster hver linje tilbage som én String, og kan da gribes af en String-array, fx "String[] tileMap".
Se [https://processing.org/reference/loadStrings_.html](https://processing.org/reference/loadStrings_.html)

Hvert enkelt tegn kan indlæses med String-metoden "charAt", der modtager en int og retunerer en char.    
Se [https://processing.org/reference/String_charAt_.html](https://processing.org/reference/String_charAt_.html)

String-arrayet kan da løbes igennem via en dobbelt løkke, hvori man så kan oprette Tile-objektet med den rette position-x og position-y.

Se følgende video, hvor jeg har skrevet et kode-eksempel:

<iframe width="560" height="315" src="https://www.youtube.com/embed/a_PoKitOO2w" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

## VIGTIGT :  I løbet af 2. modul skal udvalgte grupper præsentere for mig.
