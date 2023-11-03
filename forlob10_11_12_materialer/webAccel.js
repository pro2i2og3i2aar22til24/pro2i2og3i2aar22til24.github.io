let y = 10;
let r = 200; g = 180; b = 0;
let ned = true;
function setup() {
    canvas = createCanvas(325,550);
    // giver canvas en border på 2 pixel
    canvas.elt.style.border = '2px solid black';
    // sætter canvas til agere som en inline-block element - for at kunne centrere det
    canvas.elt.style.display = 'inline-block';
    // giver canvas parent, som er main-segment, en text-align center værdi
    // det centrerer canvas, da det er givet inline-block display-værdi
    canvas.elt.parentNode.style.textAlign = 'center'; 
}

function draw(){
    background(r,g,b);
    strokeWeight(10);
    ellipse(width/2, y, 50);
    if(ned)
    y++;
    else
    y--;
    if(y >= height || y <= 0)
    ned = !ned;
    if(accelerationX > 70){
        r = random(0, 256);
        g = random(0, 256);
        b = random(0, 256);
    }
}