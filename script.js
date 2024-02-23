
clear = document.querySelector("#clear");
let boxes = document.getElementsByClassName("row"); 
const btn = document.querySelector("#btn");
let colorPicked = document.querySelector("#colorPicked");
const pencil = document.querySelector("#pencil");
const rainbowTool = document.querySelector("#rainBow");

    //these are for toggling mouse down and up, to be used later.
let mouseDown = false;
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);
document.addEventListener("dragstart", function(event)  {
    event.preventDefault();
});
        //listeners for my buttons.
btn.addEventListener("click",newGrid);       
pencil.addEventListener("click", pencilTool);
rainbowTool.addEventListener("click", rainbowcolorTool);
clear.addEventListener("click", clearTool);

        //Takers user input and creates a grid to draw on.
function spawnGrid(input) {
    let container = document.querySelector("#container");
    for (let i = 0; i < input; i++) {
        let column = document.createElement("div");
        column.classList.add("column");

    
    for ( let k = 0; k < input; k++) {
        let row = document.createElement("div");
        row.classList.add("row");
        row.style.backgroundColor = "white";
        column.appendChild(row)
        
    }
       container.appendChild(column);
       
    } 
    
};

    //default grid size
spawnGrid(16);

        //when newgrid button is pressed this function will run.
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

};
   
        // all the math needed to create a random Hex color
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


    //we take the randomHexColor from earlier
    // and store it in random color
function rainbowcolorTool() {
    for (let box of boxes) {
        box.addEventListener("mouseover", () => {
            if (mouseDown) {
                let randomColor = randomHexColor();
                box.style.backgroundColor = randomColor;
       }   });
}};

    //pencilTool will take the value from our coloPicked color wheel
function pencilTool() {
    for (let box of boxes) {
        box.addEventListener("mouseover", () => {
            if(mouseDown) {
                box.style.backgroundColor = colorPicked.value;
            }
        })
    }
};

    //clears the board turning everything white.
function clearTool() {
    for (let box of boxes) {
        box.style.backgroundColor = "white"
    }
};



    
