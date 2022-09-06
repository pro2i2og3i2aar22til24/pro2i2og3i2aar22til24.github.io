# Forløb 5
# intro til arrays

Indtil nu kan vi gemme én værdi i en variabel. Vi kan f.eks. gemme tallet 10 i en variabel x og tallet 20 i en anden variabel y, 
og bruge disse variabler til at simulere en bolds bevægelse hen over skærmen (se jeres forrige aflevering).  

Men hvad nu hvis man ønsker at tegne måske 100 bolde på skærmen... Man kan selvfølgelig lave 200 variabler, der indeholder alle x og y værdier,
men det bliver MEGET besværligt at håndtere!    

Derfor har man opfundet arrays, der kan indeholde mange værdier i en variabel.   
Det virker således:

```java

int[] liste;            //dette opretter en variabel af typen "heltals array" 
                        //kaldet 'liste', indtil nu er variablen tom (dvs. den er null)

liste = new int[10];    //her laves et "heltals array" med plads til 10 heltal. 

println(liste);         //I processing kan du udskrive dine arrays direkte i i konsollen således

```
> Vigtigt : Læg mærke til brugen af firkantparanteser [ ] , de bruges kun til arrays!!!!.  

> Vigtigt : læg mærke til brugen af ordet "new"


Ovenstående "array" er en liste med plads til 10 heltal. Hver plads har et nummer, så man kan fortælle hvilken plads man "skriver" til eller "henter" fra.

| plads nummer   |  0     | 1      | 2      | 3      | 4      | 5      | 6     | 7     | 8     | 9      |
| -------------- | ------ | ------ | ------ | ------ | ------ | ------ | ----- | ----- | ----- | ------ |
| indhold        |  0     | 0      | 0      | 0      | 0      | 0      | 0     | 0     | 0     | 0      |

>Vigtigt : læg mærke til at plads-nummeret starter med 0 !!!

Hvis du vil indsætte noget i et array gøres det ved skrive arrayet's navn efterfulgt af firkantparanteser, der indeholder pladsnummeret.
F.eks.:

```java

list[3] = 89;         //dette indsætter tallet 89 på plads nummer 3

list[8] = 11;         //dette indsætter tallet 11 på plads nummer 8

```
Hvis man kunne kigge ind i computerens hukommelse ser arrayet nu således ud:

| plads nummer   |  0     | 1      | 2      | 3      | 4      | 5      | 6     | 7     | 8     | 9      |
| -------------- | ------ | ------ | ------ | ------ | ------ | ------ | ----- | ----- | ----- | ------ |
| indhold        |  0     | 0      | 0      | 89     | 0      | 0      | 0     | 0     | 11    | 0      |

Man kan også læse fra arrayet, det ser således ud

```java

int sum = liste[3] + liste[8];  //dette læser indholdet på fra plads 3 og plads 8 i listen, og lægger værdierne sammen
                                
println(sum);                   //hvad tror du udskrives på skærmen ??????

```
Se også processings reference:    
[https://processing.org/reference/Array.html](https://processing.org/reference/Array.html)


# Array opgave 1:

I denne opgave skal du kombinere for-loops og arrays:

* Lav et array, kaldet "liste1", der indeholder de naturlige tal fra 1 til 100. Udskriv indholdet med "println(liste1);":
* Lav et array, kaldet "liste2", der indeholder tallene i 3 tabellen fra 3 til 300. Udskriv indholdet med "println(liste2);"
* ***Frivillig*** - lav et array, kaldet "fibo" der indeholder de første 100 Fibonacci-tal... se her [https://da.wikipedia.org/wiki/Fibonacci-tal](https://da.wikipedia.org/wiki/Fibonacci-tal)   

# Array opgave 2:

I denne opgave skal du bruge for-loops, arrays og funktionen random.    
Se processing referencen: [https://processing.org/reference/random_.html](https://processing.org/reference/random_.html)


* Lav et array, kaldet "randomListe1", der indeholder 20 tilfældige hele tal imellem 0 og 19.
* ***Frivillig og  svær**** - prøv at se om du kan udtænke en metode til at sortere de tilfældige tal!!!

