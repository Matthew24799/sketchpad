

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


function randomInteger(max) {
    return Math.floor(Math.random()*(max + 1));
}

function randomRgbColor() {
    let r = randomInteger(255);
    let g = randomInteger(255);
    let b = randomInteger(255);
    return [r,g,b];
}

console.log(randomRgbColor());

function randomHexColor() {
    let [r,g,b] = randomRgbColor();

    let hr = r.toString(16).padStart(2,"0");
    let hg = g.toString(16).padStart(2, "0");
    let hb = b.toString(16).padStart(2, "0");

    return "#" + hr + hg + hb;
};




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
            let hex = randomHexColor();
            box.style.backgroundColor = hex;
        });
        
        
        };
        

 });

for(let box of boxes) { 



   

box.addEventListener("mouseover", () => {
    let hex = randomHexColor();
    box.style.backgroundColor = hex;
    console.log(box.value);
});


};

