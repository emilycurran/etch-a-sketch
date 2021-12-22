var colourMode = "black";
var gridSize = 17;

const resetButton = document.getElementById('reset-button');
const rainbowButton = document.getElementById('rainbow-button');
const blackButton = document.getElementById('black-button');
const slider = document.getElementById("myRange");
const output = document.getElementById("demo");

output.innerHTML = slider.value;


resetButton.addEventListener('click', resetGrid);
rainbowButton.addEventListener('click', changeColourModeToRainbow);
blackButton.addEventListener('click', changeColourModeToBlack)

newGrid = createGrid(gridSize);
myGrid = newGrid;
myGrid.setAttribute('id', 'grid');
document.getElementById('container').appendChild(myGrid);
console.log("here");
console.log(myGrid);
console.log("here2");
var test = document.getElementById('grid');
console.log(test);
addGridToHTML(newGrid, gridSize);

function changeSquareColour(){
    console.log("insider changeSquareColour");
    console.log(myGrid);
    if(colourMode == "black"){
        this.style.backgroundColor = 'black';
    }else if(colourMode == "rainbow"){
        this.style.backgroundColor = chooseRandomColour();
    }
}

function chooseRandomColour(){
    var r = Math.floor(Math.random()*257);
    var g = Math.floor(Math.random()*257);
    var b = Math.floor(Math.random()*257);
    return "rgb("+r+", "+g+", "+b+")";
}

function createGrid(gridSize){
    //create a grid of divs with gridSize x gridSize number of elements
    //note that only creates the div, doesn't add it to page
    console.log(gridSize);
    var grid = document.createElement('div');
    for(let i=0; i<gridSize; i++){
        var row = document.createElement('div');
        row.className = "row";
        for(var j=0; j<gridSize; j++){
            var square = document.createElement("div");
            square.className = "square";
            row.appendChild(square);
        }
        grid.appendChild(row);
    }
    grid.setAttribute('class', gridSize);
    return grid;
}

function resetGrid(){
    var squares = Array.from(document.querySelectorAll('.square'));
    squares.forEach(square => square.style.backgroundColor = 'white');
}

function changeColourModeToRainbow(){
    colourMode = "rainbow";
}

function changeColourModeToBlack(){
    colourMode = "black";
}

slider.oninput = function() {
    output.innerHTML = this.value;
    gridSize = this.value;
    newGrid = createGrid(gridSize);
    addGridToHTML(newGrid, gridSize);
  }

function addGridToHTML(newGrid, gridSize){
    console.log("start of addGridToHTML");
    console.log(newGrid);

    //remove the old grid from the html page
    var oldGrid = document.getElementById('grid');
    oldGrid.remove();

    

    //finish initialising newGrid
    newGrid.setAttribute('id', 'grid');
    myGrid = newGrid;
    console.log(myGrid);


    //insert the newly created grid in its place
    var container = document.getElementById('container');
    container.appendChild(newGrid);   
    initialiseSquares(); 
}

function initialiseSquares(){
    var squares = Array.from(document.querySelectorAll('.square'));
    squares.forEach(square => square.addEventListener('mouseenter', changeSquareColour));

}

function start(){
    createGrid()
}