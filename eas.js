const container = document.querySelector('#container');

const btn = document.querySelector('#btn');

var boxHeight;
var boxWidth;
var gridAmount;

//Read User Input Number for grid size
btn.addEventListener('click', () => {
    let gridSize = prompt("Please Enter Grid Size(Max 100):");
    calculateGrid(gridSize);
    generateGrid();
})

//Calculate Size of Grid and Box Dimensions
function calculateGrid(gridSize) {
    boxHeight = 900/gridSize;
    boxWidth = 900/gridSize;
    gridAmount = gridSize * gridSize;
}

//Generate Grid using the calculated dimensions
function generateGrid() {
    for (i = 0; i < gridAmount; i++) {
        var innerDiv = document.createElement('div');
        innerDiv.classList.add('item');
        innerDiv.setAttribute('style', `height: ${boxHeight}px; width: ${boxWidth}px`);
        container.appendChild(innerDiv);
    }
    const items = document.querySelectorAll('.item');
        items.forEach((item) => {
            item.addEventListener('mouseover', () => {
                item.setAttribute('style', `height: ${boxHeight}px; width: ${boxWidth}px; background: black;`)
            });
        });
}






