class Point {
    constructor(v, x, y) {
        this.X = x;
        this.Y = y;
        this.V = v;
    }
}

class Rectangle {
    constructor(x, y, w, h) {
        this.X = x;
        this.Y = y;
        this.W = w;
        this.H = h;
        //this.Quads = [4];
    }

    Contains(point) {
        return (point.X > (this.X - this.W))
            && (point.X < (this.X + this.W))
            && (point.Y > (this.Y - this.H))
            && (point.Y < (this.Y + this.H));
    }
}

class QuadTree {
    constructor(boundary, n) {
        this.Boundary = boundary
        this.Capacity = n;
        this.Points = [];
        this.Divided = false;
    }

    subdivide() {
        let nW = this.Boundary.W / 2;
        let nH = this.Boundary.H / 2;
        let tx = this.Boundary.X;
        let ty = this.Boundary.Y;
        let tw = this.Boundary.W;
        let th = this.Boundary.H;

        let uw = new Rectangle(tx - (nW), this.Boundary.Y - (nH), nW, nH);
        let ue = new Rectangle(tx + (nW), this.Boundary.Y - (nH), nW, nH);
        let lw = new Rectangle(tx - (nW), this.Boundary.Y + (nH), nW, nH);
        let le = new Rectangle(tx + (nW), this.Boundary.Y + (nH), nW, nH);

        this.NW = new QuadTree(uw, this.Capacity);
        this.NE = new QuadTree(ue, this.Capacity);
        this.SW = new QuadTree(lw, this.Capacity);
        this.SE = new QuadTree(le, this.Capacity);

        // let x = this.Boundary.X;
        // let y = this.Boundary.Y;
        // let w = this.Boundary.W;
        // let h = this.Boundary.H;

        // let nw = new Rectangle(x - w / 2, y - h / 2, w/2, h/2);
        // let ne = new Rectangle(x + w / 2, y - h / 2, w/2, h/2);
        // let sw = new Rectangle(x - w / 2, y + h / 2, w/2, h/2);
        // let se = new Rectangle(x + w / 2, y + h / 2, w/2, h/2);

        // this.NW = new QuadTree(nw);
        // this.NE = new QuadTree(ne);
        // this.SW = new QuadTree(sw);
        // this.SE = new QuadTree(se);

        this.Divided = true;
    }

    Insert(point) {
        if (!this.Boundary.Contains(point))
            return;

        if (this.Points.length < this.Capacity) {
            this.Points.push(point);
            //console.log("Capacity taken", this.Points.length);
            return true;
        } else {
            // subdevide
            if (!this.Divided) {
                this.subdivide();
            }
            // Place the point in the correct quad.

            // if (this.NW.Boundary.Contains(point)) this.NW.Insert(point);
            // else if (this.NE.Boundary.Contains(point)) this.NE.Insert(point);
            // else if (this.SW.Boundary.Contains(point)) this.SW.Insert(point);
            // else if (this.SW.Boundary.Contains(point)) this.SW.Insert(point);

            if (!this.NW.Insert(point)) return false;
            else if (!this.NE.Insert(point)) return false;
            else if (!this.SW.Insert(point)) return false;
            else if (!this.SW.Insert(point)) return false;

            // this.NW.Insert(point);
            // this.NE.Insert(point);
            // this.SW.Insert(point);
            // this.SW.Insert(point);

        }
    }

    Show() {
        stroke(255);
        noFill();
        strokeWeight(1);
        rectMode(CENTER);
        rect(this.Boundary.X, this.Boundary.Y, this.Boundary.W * 2, this.Boundary.H * 2);
        if (this.Divided) {
            this.NW.Show();
            this.NE.Show();
            this.SW.Show();
            this.SE.Show();
        }
        for (let p of this.Points) {
            strokeWeight(4);
            //pointMode(CENTER);
            point(p.X, p.Y);
        }
    }
}

let qtree;

function setup() {
    createCanvas(400, 400);
    //background(255);

    let boundary = new Rectangle(200, 200, 200, 200);
    qtree = new QuadTree(boundary, 4);
    console.log(qtree);

    for (let i = 0; i < 500; i++) {
        let p = new Point(i, random(width), random(height));
        qtree.Insert(p);
    }

    background(0);
    qtree.Show();
}

// function draw() {
//     console.log("Draw");
//     if (mouseIsPressed) {
//         ///console.log("Mousepressed", mouseX, mouseY);
//         let m = new Point(0, mouseX, mouseY);
//         qtree.Insert(m);

//     }

//     background(0);
//     qtree.Show();
// }