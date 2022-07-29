let grid = new Game(10,10,3,3);
let buttonNext = document.getElementById("next");
let buttonPlay = document.getElementById("play");
let buttonfastForward = document.getElementById("fastForward");
let buttonMax = document.getElementById("max");
let buttonPause = document.getElementById("pause");
let baseSpeed = 0;
let table = document.getElementById('game-grid');
console.log(grid.grid);
console.log(grid.minCellToBorn);


function drawGrid(){

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
            newCell.addEventListener("click", event => {
                                        if(grid.cells[i][j]){
                                            grid.cells[i][j] = 0;
                                            newCell.classList.remove('alive');
                                        }else{
                                            grid.cells[i][j] = 1;
                                            newCell.classList.add('alive');
                                        }
                                    })
        }
    }
}

function computeAndDraw(){
    grid.computeNextGeneration();
    drawGrid();
}

buttonNext.addEventListener("click", event => {
                                window.clearInterval(baseSpeed);
                                 computeAndDraw();
                            });

buttonPlay.addEventListener("click", event => {
                                window.clearInterval(baseSpeed)
                                baseSpeed = setInterval(computeAndDraw, 1000); 
                            });

buttonfastForward.addEventListener("click", event => {
                                        window.clearInterval(baseSpeed)
                                        speed = 500;
                                        if(speed > 100){
                                            baseSpeed = setInterval(computeAndDraw, speed);
                                            speed /= 2;
                                        }
                                        
                                    });

buttonMax.addEventListener("click", event => {
                                window.clearInterval(baseSpeed);
                                baseSpeed = setInterval(computeAndDraw, 100);
                            });

buttonPause.addEventListener("click", event => {
                                window.clearInterval(baseSpeed);
                            })



console.log(grid.nbCellsAlive(1, 2));
