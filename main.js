let grid = new Game(10,10,3,3);
console.log(grid.grid);
console.log(grid.minCellToBorn);


function drawGrid(gridID){
    let table = document.getElementById(gridID);
    table.innerHTML = '';
    let gridHeight = grid.cells.length;
    for(let i = 0 ; i < gridHeight ; i++){
        let newLine = table.insertRow(i);
        let gridWidth = grid.cells[i].length;
        for (let j = 0 ; j < gridWidth ; j++){
            let newCell = newLine.insertCell(j);
            if(grid.cells[i][j]){
                newCell.classList.add('alive');
            }
        }
    }
}

console.log(grid.nbCellsAlive(1, 2));