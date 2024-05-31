# Byg videre på denne processing kode
```java

// root er en variabel der peger på roden af træet
Node root;

// Node er en klasse der repræsenterer en node i et binært træ
class Node{
    int value;
    Node left, right;
    Node(int value){
        this.value = value;
        left = null;
        right = null;
    }
}

// "insert" er en variabel, der bestemmer om vi er i insert mode eller find mode
boolean insert = true;

// "findTal" er tallet man søger, "found" er true hvis tallet er fundet ellers false
char findTal = '0';
boolean found = false;

void setup() {
    size(512, 512);
}

void draw() {
    background(0);
    // Draw tree
    drawTree(root, 256, 200,100);
    textSize(20);
    fill(255);
    text("Tryk på tasten 'f' for at finde et tal", 10, 20);  
    text("Tryk på tasten 'a' for at indsætte tal", 10, 40);  
    text("Insert mode: " + insert, 10, 60);    
    if(insert == false){
        text("Tryk på tal der skal findes", 10, 100);
        text("Er tallet " + findTal + " i træet : " + found, 10, 120);
    }
}

void keyPressed(){
    switch(key){
        case 'a':
            insert = true;
            break;
        case 'f':
            insert = false;
            break;
        default:
            if(insert){ 
                add(key, root);
            } else {
                findTal = key;
                found = find(key, root);
            } 
    }
}


void add(int value, Node node){
    value = Integer.parseInt(""+key);
    //ADVARSEL- IMPLEMENTATION ER FORKERT ( KUN TIL TEST)
    root = new Node(value);
    root.left  = new Node(value);
    root.right = new Node(value); 
    root.left.left  = new Node(value);
    root.left.right = new Node(value);    
}

boolean find(int value, Node node){
    // IMPLEMENTATION MANGLER
    return false;
}

void drawTree(Node node, int x, int y, int dx){
    // x og y er midten af noden
    // dx er afstanden mellem noden og dens børn
    if(node == null) return;
    fill(255);
    ellipse(x, y, 30, 30);
    fill(0);
    text(node.value, x-5, y+5);
    if(node.left != null){
        // Tegn linje til venstre barn
        // Tegn venstre barn ved at kalde drawTree igen!
    }
    if(node.right != null){
        // Tegn linje til højre barn
        // Tegn højre barn ved at kalde drawTree igen!
    }
}

```