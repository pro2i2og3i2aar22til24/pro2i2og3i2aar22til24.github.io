## Eksmepel 2 : teoretisk bestemmelse af tidsfunktionen for binær-søgning

Worst case koster dette lg(N) gæt!

Grunden er at man hver gang man gætter halvverer intervallet af muligheder indtil der kun er et element tilbage.
Dette giver følgende antal intervaller:

n/2⁰ + n/2¹ + n/2² + n/2³ + ... + n/2^k, hvor vi for nemhedens skyld antager n/2^k = 1.

spørgsmålet er nu hvor mange gange vi gætter, dvs. halverer, dvs. hvad er k?

n/2^k=1 <=> n = 2^k <=> log2(n) = k

