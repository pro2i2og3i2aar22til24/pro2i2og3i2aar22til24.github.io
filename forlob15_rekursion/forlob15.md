# Forløb 13 Rekursion
## Opgave : Visuelt binært-træ, implementeret med rekursion

I dette lille forløb (3 eller måske 4 moduler) skal vi (dvs. I) bygge en visuel implementation af datastrukturen "binært-træ".

Programmet skal anvende "rekursive implementationer af funktionerne "insert" og "find" eventuelt andre....

### Rekursiv funktion

En rekursiv funktison er en funktion, der kalder sig selv.
Se eksempler her:  
[https://users.cs.utah.edu/~germain/PPS/Topics/recursion.html](https://users.cs.utah.edu/~germain/PPS/Topics/recursion.html)


Vigtigt: Husk at funktionen skal stoppe med at "kalde" sig selv når den rammer "base-case". Ellers kan man få en "***stack-overflow exception***"

### Opgaven

Koden i skal bygge videre på findes her:   
[processing kode](./BinaryVisual.md)

1. Funktionen "drawTree" er ikke færdigimplementeret. Byg den færdig - så den både tegner venstre og højre node vha. rekursion
2. Funktionen "add" er ikke færdigimplementeret. Byg den færdig så den afsøger træet rekursivt, og indsætter tallet på den rigtige plads hvis det er muligt
3. Funktionen "find" er ikke færdigimplementeret. Byg den således træet afsøges og der vises en text i "draw", der fortæller om tallet er fundet eller ej 
4. Lav eventuelt en slette metode...
5. Hvis du af en eller anden grund allerede har lavet hele opgaven ( husk alt skal bygges rekursivt ). Kan du prøve at implementere et "balanceret træ"