
class Node {
    constructor(val, x, y) {
        this.Value = val;
        this.Left = null;
        this.Right = null;
        this.X = x;
        this.Y = y;
    }

    Visit(parent) {
        fill(255);
        noStroke();
        text(this.Value, this.X, this.Y);
        if (parent != null) {
            console.log("parent passed");
            stroke(255);
            line(parent.X, parent.Y, this.X, this.Y);
        }
    }
}

class Tree {
    constructor() {
        this.root = null;
        this.H = 0;
    }

    addNode(c, n, h) {
        if (n < c.Value) {
            if (c.Left == null) {
                
                c.Left = new Node(n, c.X - 50, c.Y + 20);
                c.Left.Visit(c);
                return;
            }
            this.addNode(c.Left, n);
        } 
        if (c.Value < n) {
            if (c.Right == null) {
                c.Right = new Node(n, c.X + 50, c.Y + 20);
                c.Right.Visit(c);
                return;
            }
            this.addNode(c.Right, n);
        }
    }

    AddNode(n) {
        let node = new Node(n);
        if (this.root == null) {
            this.root = node;
            this.root.X = width / 2;
            this.root.Y = 16;
            this.H = 1;
            return;
        }
        this.addNode(this.root, n, this.H + 1);
    }

    printPreOrder(node) {
        if (node == null) return;
        console.log(node.Value);        
        this.printPreOrder(node.Left);
        this.printPreOrder(node.Right);
    }

    printInOrder(node) {
        if (node == null) return;
        this.printInOrder(node.Left);
        console.log(node.Value); 
        this.printInOrder(node.Right);
    }

    printPostOrder(node) {
        if (node == null) return;
        this.printPostOrder(node.Left);
        this.printPostOrder(node.Right);
        console.log(node.Value);        
    }

    PrintTree(order = 2) {
        if (order == 1) {
            console.log("PreOrder Print");
            if (this.root == null) { 
                console.log("Tree Empty");
                return;
            } 
            this.printPreOrder(this.root);
        }

        if (order == 2) {
            console.log("InOrder Print");
            if (this.root == null) { 
                console.log("Tree Empty");
                return;
            } else {
                this.root.Visit(null);
            }
            this.printPostOrder(this.root);
        }

        if (order == 3) {
            console.log("PostOrder Print");
            if (this.root == null) { 
                console.log("Tree Empty");
                return;
            }
            this.printPostOrder(this.root);
        }
    }
}

let tree = null;

function setup() {
    createCanvas(720, 400);
    background(51);
 
    tree = new Tree();
    let n = 10;
    for (let i = 0; i < n; i++) {
        tree.AddNode(Math.floor(Math.random() * n))
    }

//    tree.PrintTree(1);
    tree.PrintTree();
//    tree.PrintTree(3);

}

setup();