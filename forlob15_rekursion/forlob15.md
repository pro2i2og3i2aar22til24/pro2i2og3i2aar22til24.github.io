# Forløb 13 Rekursion
## Opgave : Visuelt binært-træ, implementeret med rekursion

I dette lille forløb (3 eller måske 4 moduler) skal vi (dvs. I) bygge en visuel implementation af datastrukturen "binært-træ".

Programmet skal anvende "rekursion" til at "tegne træet", "indsætte tal" og "finde tal" og eventuelt andre ting....

### Rekursiv funktion

En rekursiv funktion er en funktion, der kalder sig selv.
Et klassisk eksempel er fibonacci-tallene der matematisk kan beskrives således:

> F(n) = F(n-1) + F(n-2) for n>1, F(0) = 0, F(1) = 1 og n tilhører Z

Flere eksempler her:  
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