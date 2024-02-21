clear = document.querySelector("#clear");
let boxes = document.getElementsByClassName("row"); 
const btn = document.querySelector("#btn");
btn.addEventListener("click",newGrid);
const sprayTool = document.querySelector("#sprayCan");
const penTool = document.querySelector("#pen");
let colorPicked = document.querySelector("#colorPicked");
let enabled = true;
colorPicked.addEventListener("input", function() {
    console.log(colorPicked.value);
})

const rainbowTool = document.querySelector("#rainBow");


let mouseDown = false;

document.addEventListener("dragstart", function(event)  {
    event.preventDefault();
});



document.body.onmousedown= () => (mouseDown = true)
document.body.onmouseup = () => (mouseDown = false)


sprayTool.addEventListener("click", sprayCan);
penTool.addEventListener("click", pen);
rainbowTool.addEventListener("click", rainbowColor);

function spawnGrid(input) {
    let container = document.querySelector("#container");
    for (let i = 0; i < input; i++) {
        let column = document.createElement("div");
        column.classList.add("column");

    
    for ( let k = 0; k < input; k++) {
        let row = document.createElement("div");
        row.classList.add("row");
        row.style.border = "1px solid black";
        column.appendChild(row)
        
    }
       container.appendChild(column);
       
    } 
    
};
spawnGrid(16);


function newGrid() {

    let newGrid = prompt("Enter desired new grid, MAX:100");
    let parent = document.querySelector("#container"); 
    while(parent.lastChild) {
        parent.lastChild.remove();
    } 
    if (newGrid > 100) {
       alert("NUMBER TOO LARGE");
       newGrid = prompt("Enter desired new grid, MAX:100");
        } else spawnGrid(newGrid);

        sprayCan();

        
for (let box of boxes) {
    
    clear.addEventListener("click", () => {
        box.style.backgroundColor = "white";
    })
    }

};
   

function randomInteger(max) {
    return Math.floor(Math.random()*(max + 1));
}

function randomRgbColor() {
    let r = randomInteger(255);
    let g = randomInteger(255);
    let b = randomInteger(255);
    return [r,g,b];
}


function randomHexColor() {
    let [r,g,b] = randomRgbColor();

    let hr = r.toString(16).padStart(2,"0");
    let hg = g.toString(16).padStart(2, "0");
    let hb = b.toString(16).padStart(2, "0");

    return "#" + hr + hg + hb;
};


function sprayCan() {

    
for(let box of boxes) { 
    box.addEventListener("mouseover", () => {
        if (enabled == true) { 
        if (mouseDown)  {

        
    box.style.backgroundColor = colorPicked.value;
        }
}})};
};

function pen() {
    enabled = false;
    for (let box of boxes) {
        box.addEventListener("mousedown", () => {
        box.style.backgroundColor = colorPicked.value;
        
        })
        sprayTool.addEventListener("mouseup", () => {
            enabled = true;
            
        })
        rainbowTool.addEventListener("mouseup", () => {
            enabled = true;
        })
    }
};

function rainbowColor() {

    console.log("worked");
    for (let box of boxes) {
        box.addEventListener("mouseover", () => {
            if (enabled == true) {
            if (mouseDown) {
                let randomColor = randomHexColor();
                rainbowTool.style.backgroundColor = randomColor;
            box.style.backgroundColor = randomColor;
       }   }});
}};


for (let box of boxes) {
    
    clear.addEventListener("click", () => {
        box.style.backgroundColor = "white";
    })
    }


