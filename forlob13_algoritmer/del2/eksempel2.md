# Eksempel 2: Teoretisk Bestemmelse af Tidsfunktionen for Binær Søgning

I worst case koster dette lg(N) forsøg inden binærsøgning finder det rigtige tal!


**forklaring**

Grunden er, at hver gang man gætter, halverer man intervallet af muligheder, indtil der kun er mindst et element tilbage i intervallet. 

- første gange der ledes i intervallet er der altså n elementer
- anden gang n/2
- tredje gang n/4
- osv.

Dette skrives op som : n/2^k er det antal gange man har delt intervallet

Ialt giver følgende antal intervaller:

> n/2^0 + n/2^1 + n/2^2 + n/2^3 + ... + n/2^k , vi antager n/2^k = 1

Spørgsmålet er nu, hvor mange gange vi gætter, dvs. halverer, dvs. hvad er \( k \)?

> n/2^k = 1 <=> n = 2^k <=> \log_2(n) = k
