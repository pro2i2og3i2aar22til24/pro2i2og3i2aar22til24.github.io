void setup(){
  
  String[]  stringList  = loadStrings("mega_liste.txt");
  int[]     intList = new int[stringList.length];

  for(int i=0 ; i<intList.length ; i++ ){
    intList[i] = Integer.parseInt(stringList[i]);
  }

  println("fil længde: ", intList.length);

  maalTiden(intList);

  exit();
}


void maalTiden(int[] intList){
  long startTime = millis();
  //println(startTime);
  println("index på søgte tal", findIndexB(219975603,intList));
  long endTime = millis();
  println("Time: " + (endTime-startTime));

}

int findIndexL(int tal, int[] liste){
  int plads = 0;
  boolean succes = false;
  for(int i=0 ; i< liste.length ; i++){
    if(liste[i]==tal){
      succes = true;
      plads = i;
      break;
    }
  }
  if(succes){
    return plads;
  }else{
    return -1;
  }
}






int findIndexB(int tal, int[] liste){
// finder pladsen for tal i liste
  int min     = 0;
  int max     = liste.length-1;
  int guess   = (min + max)/2;
  boolean succes = false;

  while( min < max && 1 < max-min && liste[guess] != tal){
    //println("min: " + min, "max: " + max, guess);
    if(liste[guess] < tal){
      min = guess;
      guess = (min + max)/2;
    }
    if(tal < liste[guess]){
      max = guess;
      guess = (min + max)/2;    
    }
  }

  if(liste[guess]==tal){
    return guess;
  }else{
    println("insæt efter index nr. "+ guess);
    return -1;
  }

}