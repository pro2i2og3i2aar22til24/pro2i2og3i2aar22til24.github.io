# Eksempel 2: Teoretisk Bestemmelse af Tidsfunktionen for Binær Søgning

I worst case koster dette lg(N) gæt!

Grunden er, at hver gang man gætter, halverer man intervallet af muligheder, indtil der kun er et element tilbage. Dette giver følgende antal intervaller:

\[ n/2^0 + n/2^1 + n/2^2 + n/2^3 + \ldots + n/2^k \], hvor vi for nemhedens skyld antager \( n/2^k = 1 \).

Spørgsmålet er nu, hvor mange gange vi gætter, dvs. halverer, dvs. hvad er \( k \)?

\[ n/2^k = 1 \implies n = 2^k \implies \log_2(n) = k \]
