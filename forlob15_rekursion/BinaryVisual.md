# Forslag til kode-implementation i processing
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

// insert er en variabel der bestemmer om vi er i insert mode eller find mode
boolean insert = true;

void setup() {
    size(512, 512);
}

void draw() {
    background(0);
    // Draw tree
    drawTree(root, 256, 100,50);
    textSize(20);
    fill(255);
    text("Tryk på tasten 'f' for at finde et tal", 10, 20);  
    text("Tryk på tasten 'a' for at indsætte tal", 10, 40);  
    text("Insert mode: " + insert, 10, 60);    
    if(insert == false){
        text("Tryk på tal der skal findes", 10, 100);
        text("Hvis tallet findes, skrives det her:...", 10, 120);
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
                add(key);
            } else {
                find(key);
            } 
    }
}

void add(int value){
    value = Integer.parseInt(""+key);
    //ADVARSEL- IMPLEMENTATION MEGET MANGELFULD
    if(root == null){   root = new Node(value);}
    else{              root.left = new Node(value);}
}

void find(int value){
    // IMPLEMENTATION MANGLER
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
        // Tegn venstre barn
    }
    if(node.right != null){
        // Tegn linje til højre barn
        // Tegn højre barn
    }
}

```