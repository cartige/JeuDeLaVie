class Game{
    constructor(width, height, minCellToBorn, minCellToStay){
        this._width = width;
        this._height = height;
        this.cells = Array(this._height).fill().map(() => Array(this._width).fill(0));
        // this.cells = [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        //               [0, 0, 0, 0, 0, 1, 0, 1, 0, 0],
        //               [0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
        //               [1, 0, 0, 0, 0, 0, 1, 1, 0, 0],
        //               [0, 0, 1, 1, 0, 0, 0, 0, 0, 0],
        //               [1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
        //               [0, 0, 1, 0, 0, 0, 1, 0, 0, 0],
        //               [0, 0, 0, 0, 0, 0, 0, 1, 1, 0],
        //               [0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
        //               [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]];
        this._minCellToBorn = minCellToBorn;
        this._minCellToStay = minCellToStay;
    }
    get grid() {
        return this.cells;
    }
    get minCellToBorn() {
        return this._minCellToBorn;
    }
    get minCellToStay() {
        return this._minCellToStay;
    }
    get width() {
        return this._width;
    }
    get height() {
        return this._height;
    }
    set minCellToBorn(minCellToBorn) {
        if(minCellToBorn !== this._minCellToBorn){
            this._minCellToBorn = minCellToBorn;
        }
    }
    set minCellToStay(minCellToStay) {
        if(minCellToStay !== this._minCellToStay){
            this._minCellToStay = minCellToStay;
        }
    }
    set width(width){
        if(width !== this._width){
            this._width = width;
        }
    }
    set height(height){
        if(height !== this._height){
            this._height = height;
        }
    }

    nbCellsAlive(i, j){
        let result = 0;
        for(let y = Math.max(i-1, 0) ; y <= Math.min(i+1, this.cells.length-1) ; y++){

            for(let x = Math.max(j-1, 0) ; x <= Math.min(j+1, this.cells[y].length-1) ; x++){
  
                result += this.cells[y][x];
            }
        }     
        
        return result-this.cells[i][j];
    }

    computeNextGeneration(){

        let newGeneration = [];
        this.cells.forEach((row, i) => {
            let newRow = [];
            newGeneration.push(newRow);
            row.forEach((cell, j) => {
    
                if(cell){
                    if(this._minCellToStay === this.nbCellsAlive(i, j) || this._minCellToStay-1 === this.nbCellsAlive(i, j)){
                        newRow.push(1);
                    }else{
                        newRow.push(0);
                    }
                }else{
                    if(this._minCellToBorn === this.nbCellsAlive(i, j)){
                        newRow.push(1);
                    }else{
                        newRow.push(0);
                    }
                }
            })
        })
        this.cells = newGeneration;
    }

    reinitialize(){
        this.cells = [];
        this.cells = Array(this._height).fill().map(() => Array(this._width).fill(0));
    }
}

