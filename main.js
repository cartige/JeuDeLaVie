// let gridHeight = document.querySelector("#grid\-height");
// let gridWidth = document.querySelector("#grid\-width");
let gridHeight = document.getElementById('grid-height');
let gridWidth = document.getElementById('grid-width');
let grid = new Game(10,10,3,3);
let closeMenuButton = document.getElementById('close-menu');
let menuButton = document.getElementById('menu-button');
let menu = document.getElementById('menu');
let buttonNext = document.getElementById("next");
let buttonPlay = document.getElementById("play");
let buttonFastForward = document.getElementById("fastForward");
let buttonMax = document.getElementById("max");
let buttonPause = document.getElementById("pause");
let baseSpeed = 0;
let table = document.getElementById("game-grid");
let gridSize = document.getElementById("grid-size");





function drawGrid(){

    table.innerHTML = '';
    let height = grid.cells.length;
    console.log(grid.cells.length);
    for(let i = 0 ; i < height ; i++){
        let newLine = table.insertRow(i);
        let width = grid.cells[i].length;
        for (let j = 0 ; j < width ; j++){
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

function reinitializeAndDraw(){
    grid.reinitialize();
    drawGrid();
}

buttonNext.addEventListener("click", () => {
                                window.clearInterval(baseSpeed);
                                 computeAndDraw();
                            });

buttonPlay.addEventListener("click", () => {
                                window.clearInterval(baseSpeed)
                                baseSpeed = setInterval(computeAndDraw, 1000); 
                            });

buttonFastForward.addEventListener("click", () => {
                                        window.clearInterval(baseSpeed)
                                        speed = 500;
                                        if(speed > 100){
                                            baseSpeed = setInterval(computeAndDraw, speed);
                                            speed /= 2;
                                        }
                                        
                                    });

buttonMax.addEventListener("click", () => {
                                window.clearInterval(baseSpeed);
                                baseSpeed = setInterval(computeAndDraw, 100);
                            });

buttonPause.addEventListener("click", () => {
                                window.clearInterval(baseSpeed);
                            });

gridSize.addEventListener("click", () => {

                            grid.height = parseInt(gridHeight.value);
                            grid.width = parseInt(gridWidth.value);
                            console.log(grid.grid);
                            console.log(grid.height);
                            console.log(grid.width);
                            reinitializeAndDraw();
                           
                        });
                        console.log(grid.height);

closeMenuButton.addEventListener("click", () => {
                                    menu.classList.remove('z-index');
                                    menuButton.classList.add('z-index');
                                })

menuButton.addEventListener("click", () => {
                                menu.classList.add('z-index');
                                menuButton.classList.remove('z-index');
                            })

// gridHeight.addEventListener("input", () => {
//     grid.height = parseInt(this.value);
    
// })
// gridWidth.addEventListener("input", () => {
//     grid.width = parseInt(this.value);
// })

console.log(grid.nbCellsAlive(1, 2));
console.log(grid.grid);