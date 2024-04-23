# Eksempel 2: Teoretisk Bestemmelse af Tidsfunktionen for Binær Søgning

I worst case koster dette lg(N) forsøg inden binærsøgning finder det rigtige tal!


**Forklaring**

Grunden er, at hver gang man gætter, halverer man intervallet af muligheder, indtil der kun er et element tilbage i intervallet. 

- første gange der ledes i intervallet er der altså n elementer
- anden gang n/2
- tredje gang n/4
- osv.

Dette skrives op som : **"antal elementer i interval" = n/2^k**, hvor k er det antal gange man har delt intervallet.

Sidste gang vi deler vi deler intervallet er **1 = n/2^k**

Det er nu muligt at beregne antal gæt, dvs. k

> n/2^k = 1 <=> n = 2^k <=> \log_2(n) = k
