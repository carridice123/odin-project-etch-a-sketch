let color = "black";
document.addEventListener("DOMContentLoaded", function(){
    createBoard(16);
    let popUp = document.querySelector("#popup");
    popUp.addEventListener("click", function(){
        let size = getSize();
        createBoard(size);
    })





    
})



function createBoard(size) {
    let board = document.querySelector(".sketch-board");


    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    
    let numDivs = size * size;
    
    for(let i = 0; i < numDivs; i++) {
        let div = document.createElement("div");
        div.addEventListener("mouseover", colorDiv)
        board.insertAdjacentElement("beforeend", div);
        
    
    }





}

function getSize() {
    let userInput = prompt("How many boxes do you want?");
    let message = document.querySelector(".message")
    if(userInput === ""){
        message.innerText = "please provide a number";

    }
    else if(userInput < 0 || userInput > 100) {
        message.innerText = "please provide a number between one and a hundred";
    }
    else {
        message.innerText = "begin your work of art";
        return userInput;
    }
   
}


function colorDiv() {
    if(color == "random") {
    this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`
    }
    else{
        this.style.backgroundColor = 'black';
    }

}

function setColor(colorChoice) {
  color = colorChoice;



}

function resetBoard(){
    let divs = document.querySelectorAll("div");
    divs.forEach((div) => div.style.backgroundColor = "white");
 
    


}

