document.addEventListener("DOMContentLoaded", function(){
    createBoard(16);





    console.log("hey");
})



function createBoard(size) {
    let board = document.querySelector(".sketch-board");


    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    
    let numDivs = size * size;
    
    for(let i = 0; i < numDivs; i++) {
        let div = document.createElement("div");
        board.insertAdjacentElement("beforeend", div)
        div.style.backgroundColor = "pink";
    }





}