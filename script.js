class Game{
    constructor(width, heigth, min_cell_to_born, min_cell_to_born){
        this.width = width;
        this.heigth = heigth;
        this.cells = [...Array(this.width)].map(cell => Array(this.heigth));
        this._min_cell_to_born = min_cell_to_born;
        this._min_cell_to_stay = min_cell_to_stay;
    }
    get grid() {
        return this.cells;
    }
    get min_cell_to_born() {
        return this._min_cell_to_born;
    }
    get min_cell_to_stay() {
        return this._min_cell_to_stay;
    }
    set min_cell_to_born(min_cell_to_born) {
        if(min_cell_to_born !== this._min_cell_to_born){
            this._min_cell_to_born = min_cell_to_born;
        }
    }
    set min_cell_to_stay(min_cell_to_stay) {
        if(min_cell_to_stay !== this._min_cell_to_stay){
            this._min_cell_to_stay = min_cell_to_stay;
        }
    }

}