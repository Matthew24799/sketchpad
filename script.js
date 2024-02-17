

function spawnGrid(input) {
    let container = document.querySelector("#container");
    for (let i = 0; i < input; i++) {
        let column = document.createElement("div");
        column.classList.add("column");

    
    for ( let k = 0; k <= input; k++) {
        let row = document.createElement("div");
        row.classList.add("row");
        row.style.border = "2px solid black";
        column.appendChild(row)
        
    }
       container.appendChild(column);
       
    } 
    
};
spawnGrid(16);

let boxes = document.getElementsByClassName("row"); 


for(let box of boxes) { 

box.addEventListener("mouseover", () => {
    box.style.backgroundColor = "red";
    console.log(box);
});


};