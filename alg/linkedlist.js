console.log("Linked List");

class Node {
    constructor(dataValue) {
        this.Data = dataValue;
        this.Next = null;
    }
}

class LinkedList {
    constructor() {
        this.Head = null;
        this.Count = 0;
    }

    PrintList() {
        console.clear();
        if (this.Head == null) {
            console.log("List empty");
            return;
        }

        let c = this.Head;
        let str = "";
        while (c != null) {
            str += c.Data;
            if (c.Next != null) str += ", ";
            c = c.Next;
        }
        console.log(str);
    }

    AddNode(dataValue) {
        let n = new Node(dataValue);
        if (this.Head == null) {
            this.Head = n;
            return;
        }

        let c = this.Head;
        while (c.Next != null) {
            c = c.Next;
        }
        c.Next = n;
    }

    AddNodeInOrder(dataValue) {
        let n = new Node(dataValue);
        if (this.Head == null) {
            this.Head = n;
            return;
        }

        if (this.Head.Data > dataValue) {
            n.Next = this.Head;
            this.Head = n;
            return;
        }

        let c = this.Head;
        while (c.Next != null) {
            console.log(c.Data, dataValue);
            if (c.Next != null && c.Next.Data > dataValue) {
                n.Next = c.Next;
                c.Next = n;
                return;
            }
            c = c.Next; 
        }

        if (c.Next == null) c.Next = n;
    }
}

//let n = new Node("Some data");
//console.log(n.Data);

let list = new LinkedList();
//list.PrintList();
list.AddNode("3");
list.AddNode("25");
list.AddNode("4");
//list.PrintList();

let ol = new LinkedList();
ol.AddNodeInOrder(21);
ol.AddNodeInOrder(4);
ol.AddNodeInOrder(18);
ol.AddNodeInOrder(40);
ol.PrintList();

