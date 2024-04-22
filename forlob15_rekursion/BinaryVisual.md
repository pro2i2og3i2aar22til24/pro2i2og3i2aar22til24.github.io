# Forslag til kode-implementation i processing

```java
Node root;
boolean insert = true;

void setup() {
    size(512, 512);
}

void draw() {
    background(0);
    // Draw tree
    drawTree(root, 256, 100, 20);
    textSize(20);
    fill(255);
    text("Tryk på tasten 'f' for at finde et tal", 10, 20);  
    text("Tryk på tasten 'a' for at indsætte tal", 10, 40);  
    text("Insert mode: " + insert, 10, 60);    

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
            if(insert) add(Integer.parseInt(""+key)); else find(Integer.parseInt(""+key)); 
    }
}

void add(int value){
    //ADVARSEL- MEGET DÅRLIG OG IKKE RIGTIG IMPLEMENTATION AF ADD
    if(root == null){
        root = new Node(value);
    }else{
        if(root.right == null){
            root.right = new Node(value);
        }else{
            if(root.right.right == null){
                root.right.right = new Node(value);
            }else{
                if(root.right.right.right == null){
                    root.right.right.right = new Node(value);
                }else{
                     if(root.right.right.right.right == null){
                        root.right.right.right.right = new Node(value);
                     }
                }
            }
        }
    }

}

void find(int value){
    //MANGLER
}


class Node{
    int value;
    Node left;
    Node right;
    Node(int value){
        this.value = value;
        left = null;
        right = null;
    }
}

void drawTree(Node node, int x, int y, int dx){
    if(node == null) return;
    fill(255);
    ellipse(x, y, 30, 30);
    fill(0);
    text(node.value, x-5, y+5);
    if(node.left != null){
        stroke(255);
        line(x, y+5, x-dx, y+50);
        drawTree(node.left, x-dx, y+50, dx/2);
    }
    if(node.right != null){
        stroke(255);
        line(x, y+5, x+dx, y+50);
        drawTree(node.right, x+dx, y+50, dx/2);
    }
}
```