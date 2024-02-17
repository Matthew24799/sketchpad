

function spawnGrid(input) {
    let container = document.querySelector("#container");
    for (let i = 0; i < input; i++) {
        let column = document.createElement("div");
        column.classList.add("column");

    
    for ( let k = 0; k < input; k++) {
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
const btn = document.querySelector("#btn");


btn.addEventListener("click", () => {
    let newGrid = prompt("Enter desired new grid, MAX:100");
     let parent = document.querySelector("#container"); 
     while(parent.lastChild) {
         parent.lastChild.remove();
     } 
     if (newGrid >= 100) {
        alert("TOO LARGE OF A NUMBER");
        newGrid = prompt("Enter desired new grid, MAX:100");
    } 
     spawnGrid(newGrid);
    


     for(let box of boxes) { 

        box.addEventListener("mouseover", () => {
            box.style.backgroundColor = "red";
            console.log(box);
        });
        
        
        };
        

 });

for(let box of boxes) { 

box.addEventListener("mouseover", () => {
    box.style.backgroundColor = "red";
    console.log(box);
});


};

