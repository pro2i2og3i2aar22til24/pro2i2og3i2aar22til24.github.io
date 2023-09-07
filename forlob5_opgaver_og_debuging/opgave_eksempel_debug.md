## Eksempel på forkert løsning af : opgave 4 ,  https://leetcode.com/problems/remove-duplicates-from-sorted-array/

```java

// Dette er et forsøg på at løse opgave 4
// https://leetcode.com/problems/remove-duplicates-from-sorted-array/
//
// 1.) Vi skal returnere hvor mange forkellige tal, dvs. "unikke", der er i "nums" 
// 2.) Vi skal bytte de første elementer i "nums" ud med de "unikke"
//
// Men koden virker ikke! 
// Lad os prøve at finde ud af hvorfor vha. debuggeren - kopier koden over i processing
// kør den i debug-mode og find ud af hvorfor den ikke virker som den skal !


void setup(){
      int[] testArray  = {1,2,2};
      int resultat     = removeDuplicates(testArray);
      println(resultat);
  }
  
  
  public int removeDuplicates(int[] nums) {
        int[] unik_list = new int[nums.length];
        int result = 1;
        
        for(int i=0 ; i< nums.length ; i++) unik_list[i] = nums[0];
        
        for(int n : nums){
            boolean unik = true;
            for(int u : nums) if(u == n) unik = false;
            if(unik) result += 1;
        }
        
        return result;
    }

    ```