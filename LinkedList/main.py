import SLL
        
class Stack(object):
  def __init__(self):
    self.ll = SLL.ItemList()
  
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
