let canvas;
let ctx;
let canvasWidth = 1000;
let canvasHeight = 900;
let cellWidth = canvasWidth / 3;
let cellHeight = canvasHeight / 3;
let strokeColor = 'white';
let grid;

document.addEventListener('DOMContentLoaded', SetupCanvas);

class Cell {
    constructor(id, x, y) {
        this.Id = id;
        this.State = -1;
        this.strokeColor = 'white';
        this.x = x;
        this.y = y;
        this.tX = x * cellWidth;
        this.tY = y * cellHeight;
        this.cX = (this.tX + cellWidth) / 2;
        this.cY = (this.tY + cellHeight) / 2;
        this.offSet = 20;
        this.lineThickness = 10;
    }

    Draw() {
        if (this.Id == 1) {
            console.log(this.Id, this.x, this.y, this.tX, this.tY);
            ctx.strokeStyle = this.strokeColor;
        ctx.beginPath();
        ctx.moveTo(this.tX + this.offSet, this.tY + this.offSet);
        ctx.lineTo(this.tX + cellWidth - this.offSet, this.tY + cellHeight - this.offSet);
        ctx.lineWidth = this.lineThickness;
        //ctx.closePath();
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(this.tX + this.offSet, this.tY + this.cellHeight - this.offSet);
        ctx.lineTo(this.tX + cellWidth - this.offSet, this.tY + this.offSet);
        //ctx.closePath();
        ctx.stroke();

        //DrawX();
/*
        ctx.beginPath();
        ctx.ellipse(this.cX, this.cY, cellWidth/2 - (offSet*2), cellWidth/2 - (offSet*2), Math.PI / 4, 0, 2 * Math.PI);
        ctx.stroke();
*/
        }
    }

    DrawX() {
        ctx.strokeStyle = this.strokeColor;
        ctx.beginPath();
        ctx.ellipse(this.cX, this.cY, cellWidth/2 - (offSet*2), cellWidth/2 - (offSet*2), Math.PI / 4, 0, 2 * Math.PI);
        ctx.stroke();
    }
}

class Grid {
    constructor() {
        this.cell = [3];
        this.strokeColor = 'yellow';
        let id = 1;
        for (let i = 0; i < 3; i++) {
            this.cell[i] = [];
            for (let j = 0; j < 3; j++) {
                this.cell[i][j] = new Cell(id, j,i);
                this.cell[i][j].Draw();
                id++;
            }
        }
    }

    Draw() {
        ctx.strokeStyle = this.strokeColor;
        ctx.beginPath();
        ctx.moveTo(0, cellHeight);
        ctx.lineTo(canvasWidth, cellHeight);
        ctx.moveTo(0, cellHeight*2);
        ctx.lineTo(canvasWidth, cellHeight*2);
        ctx.moveTo(cellWidth, 0);
        ctx.lineTo(cellWidth, canvasHeight);
        ctx.moveTo(cellWidth*2, 0);
        ctx.lineTo(cellWidth*2, canvasHeight);
        ctx.closePath();
        ctx.stroke();
    }
}

function SetupCanvas() {
    canvas = document.getElementById('my-canvas');
    ctx = canvas.getContext('2d');
    canvas.width = canvasWidth;
    canvas.height = canvasHeight;
    ctx.fillStyle = 'black';
    ctx.fillRect(0,0,canvas.width, canvas.height);
    grid = new Grid();

    Render();
}

function Render() {
    grid.Draw();
}

