document.getElementById("Spiller 1").addEventListener("click",insertName);
document.getElementById("Spiller 2").addEventListener("click",insertName);

let xSturn= false; 
const cells = document.getElementsByTagName("td");
for(let i=0; i < cells.length ; i++){           
    cells[i].id = "id"+i;
    cells[i].addEventListener("click", function(){ handleIt(cells[i])});
}


// INSERT NAME FUNCTION
function insertName(event){
    event.target.innerHTML = "Spiller :" + " <input id = 'input"+ event.target.id +"'></input>";
    document.getElementById("input"+event.target.id).addEventListener("keypress",handleEnter);
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
         document.getElementById("vinder").innerHTML = xSturn ? "X vinder" : "O vinder";
    }else{
        document.getElementById("vinder").innerHTML = "hvem vinder?";
    }
}
