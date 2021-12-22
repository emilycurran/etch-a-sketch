var mode = "black";
var gridSize = 17;
var myGrid = createGrid(gridSize);
myGrid.setAttribute('id', 'grid');
var thisContainer = document.getElementById('container');
thisContainer.appendChild(myGrid);

var squares = Array.from(document.querySelectorAll('.square'));
squares.forEach(square => square.addEventListener('mouseenter', changeSquareColour));

function changeSquareColour(){
    this.style.backgroundColor = 'black';
}

function createGrid(gridSize){
    //create a grid of divs with gridSize x gridSize number of elements
    var grid = document.createElement('div');
    for(let i=0; i<gridSize; i++){
        var row = document.createElement('div');
        row.className = "row";
        for(var j=0; j<gridSize; j++){
            var square = document.createElement("div");
            square.className = "square";
            console.log(typeof(square));
            row.appendChild(square);
        }
        grid.appendChild(row);
    }
    return grid;
}

