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
