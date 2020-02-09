class Node(object):
    def __init__(self, data):
        self.data = data
        self.next = None
    

class ItemList(object):
    def __init__(self):
        self.head = None
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
                return
            elif c.next == None and c.data < newValue:
                n.next = c.next
                c.next = n
                self.count += 1
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
    
    def insert(self, newValue):
        n = Node(newValue)
        if self.head == None:
            self.head = n
            self.count += 1
            return
        
        c = self.head
        while c.next != None:
            c = c.next
        
        c.next = n
        self.count += 1
        return
    
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

    def getHead(self):
        if self.head == None:
            return None
        return self.head.data

    def insertHead(self, newValue):
        n = Node(newValue)
        if self.head == None:
            self.head = n
            self.count += 1
            return
        
        n.next = self.head
        self.head = n
        return

    def deleteHead(self):
        if self.head == None:
            return None
        
        n = self.head
        self.head = self.head.next
        n.next = None
        self.count -= 1
        return n.data
        
        
class Stack(object):
  def __init__(self):
    self.ll = ItemList()
  
  def Push(self, newValue):
    self.ll.insertHead(newValue)
  
  def Pop(self):
    return self.ll.deleteHead()

  def Peek(self):
    return self.ll.getHead()
  
  def GetValues(self):
    return self.ll.getValues()
  
  def GetCount(self):
    return self.ll.get_count()

s = Stack()
print(s.GetValues())
s.Push(2)
print(s.GetValues())
print(s.GetCount(), " Items in the stack")
print("Pop: ", s.Pop())
print(s.GetCount(), " Items in the stack")
print(s.GetValues())
s.Push(2)
s.Push(1)
s.Push(3)
s.Push(9)
print(s.GetValues())
print("Pop: ", s.Pop())
print(s.GetCount(), " Items in the stack")
print(s.GetValues())

#l = ItemList()

#print("Stack")
#l.stackPush(0)
#l.printList()
#l.stackPush(20)
#l.printList()
#print("Popped: ", l.stackPop())
#l.printList()
#l.stackPush(9)
#l.printList()
#l.stackPush("test")
#l.printList()
#print("Peeked: ", l.stackPeek())
