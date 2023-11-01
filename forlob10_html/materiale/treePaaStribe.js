document.getElementById("Spiller X").addEventListener("click",insertName);
document.getElementById("Spiller O").addEventListener("click",insertName);

let xSturn= false; 
let scoreX = 0;
let scoreY = 0;

const cells = document.getElementsByTagName("td");
for(let i=0; i < cells.length ; i++){           
    cells[i].id = "id"+i;
    cells[i].addEventListener("click", function(){ handleIt(cells[i])});
}

// INSERT NAME FUNCTION
function insertName(event){
    let inp = document.createElement("input");
    inp.id = "input"+ event.target.id;
    inp.addEventListener("keypress",handleEnter);
    event.target.innerHTML = "";
    event.target.appendChild(inp);

    //event.target.innerHTML = "Spiller :" + " <input id = 'input"+ event.target.id +"'></input>";
    //document.getElementById("input"+event.target.id).addEventListener("keypress",handleEnter);
}

// ENTER NAME DONE
function handleEnter(event){
    if(event.key=="Enter"){
        event.target.parentElement.innerHTML = event.target.parentElement.id + " : " + event.target.value;
    }
}

// INSERT X OR O
function handleIt(event){
    xSturn = !xSturn;
    if(xSturn)
        event.innerHTML = "X";
    else
        event.innerHTML = "O";

    hvemVinder();
}

//CHECK WINNS
function hvemVinder(){
    //lav en funktion der tjekker indholdet af cellerne??
    let cells = document.getElementsByTagName("td");

    let r1 = cells[0].innerHTML== cells[1].innerHTML && cells[1].innerHTML== cells[2].innerHTML && cells[0].innerHTML != ""
    let r2 = cells[3].innerHTML== cells[4].innerHTML && cells[4].innerHTML== cells[5].innerHTML && cells[3].innerHTML != ""
    let r3 = cells[6].innerHTML== cells[7].innerHTML && cells[7].innerHTML== cells[8].innerHTML && cells[6].innerHTML != ""


    if(r1 || r2 ){
        if(xSturn){
            document.getElementById("vinder").innerHTML = "X vinder";
            scoreX++;
            document.getElementById("score").innerHTML = "X="+scoreX + " O="+scoreY;
        }else{
            document.getElementById("vinder").innerHTML = "O vinder";
            scoreY++;
            document.getElementById("score").innerHTML = "X="+scoreX + " O="+scoreY;
        }
    }else{
        document.getElementById("vinder").innerHTML = "hvem vinder?";
    }
}

//RESET GAME
function resetGame(){
    let cells = document.getElementsByTagName("td");
    for(let i=0 ; i< cells.length ; i++){
        cells[i].innerHTML = "";
    }
    document.getElementById("vinder").innerHTML ="hvem vinder?"
}

function resetScore(){
    scoreX=0;
    scoreY=0;
    document.getElementById("score").innerHTML = "";
    document.getElementById("vinder").innerHTML ="hvem vinder?"
}
