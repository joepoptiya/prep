class Node(object):
    def __init__(self, data):
        self.data = data
        self.next = None

class ItemList(object):
    def __init__(self):
        self.head = None
        self.tail = None
        self.count = 0

    def printList(self):
        if self.head == None:
            print("List empty")
            return
        list = []
        c = self.head
        while c != None:
            #print(c.data)
            list.append(c.data)
            c = c.next
        print(list)

    def get_count(self):
        return self.count

    def insert(self, newValue):
        n = Node(newValue)
        if self.head == None:
            self.head = n
            self.tail = n
            self.count += 1
            return
        
        c = self.head
        while c.next != None:
            c = c.next
        
        c.next = n
        self.tail = n
        self.count += 1
        return

    def insertInOrder(self, newValue):
        n = Node(newValue)
        if self.head == None:
            self.head = n
            self.count += 1
            return
        
        c = self.head
        while c != None:
            if c.next != None and c.data < newValue and c.next.data > newValue:
                n.next = c.next
                c.next = n
                self.count += 1
                self.tail = n
                return
            elif c.next == None and c.data < newValue:
                n.next = c.next
                c.next = n
                self.count += 1
                self.tail = n
                return
            c = c.next
        
        return

    def insertInOrderDup(self, newValue):
        n = Node(newValue)
        if self.head == None:
            self.head = n
            self.count += 1
            return
        
        c = self.head
        while c.next != None:
            if c.data <= newValue:
                n.next = c.next
                c.next = n
                self.count += 1
                return
            c = c.next
        return

    def deDup(self):
        if self.head == None:
            print("List empty")
            return
        c = self.head
        while c.next != None:
            if c.data == c.next.data:
                t = c.next
                c.next = c.next.next
                t.next = None
                self.count -= 1
            c = c.next

    def reverse(self):
        if self.head == None:
            print("List empty")
            return
        c = self.head
        p = None
        t = None
        while c != None:
            t = c.next
            c.next = p
            p = c
            c = t
        self.head = p

    def getValues(self):
        if self.head == None:            
            return None
        list = []
        c = self.head
        while c != None:
            #print(c.data)
            list.append(c.data)
            c = c.next
        return list

    def getHead(self):
        if self.head == None:
            return None
        return self.head.data

    def getTail(self):
        if self.tail == None:
            return None
        return self.tail.data

    def insertHead(self, newValue):
        n = Node(newValue)
        if self.head == None:
            self.head = n
            self.count += 1
            return
        
        n.next = self.head
        self.head = n
        self.count += 1
        return

    def insertTail(self, newValue):
        n = Node(newValue)
        if self.tail == None:
            self.head = n
            self.tail = n
            self.count += 1
            return
        
        self.tail.next = n
        self.tail = n
        self.count += 1
        return

    def deleteHead(self):
        if self.head == None:
            return None

        n = self.head
        if self.head == self.tail:
            self.tail = self.tail.next
        
        self.head = self.head.next
        n.next = None
        self.count -= 1
        return n.data
        
    def deleteTail(self):
        if self.tail == None:
            return None
        
        n = self.tail
        if self.head == self.tail:
          self.head = self.head.next

        self.tail = self.tail.next
        n.next = None
        self.count -= 1
        return n.data

    def getMiddle(self):
        if self.tail == None:
            return None

        s = self.head
        f = self.head

        while f != None:
          s = s.next
          f = f.next
          f = f.next

        return s.data


