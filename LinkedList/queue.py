import SLL

class Queue(object):
  def __init__(self):
    self.ll = SLL.ItemList()
  
  def Enqueue(self, newValue):
    self.ll.insertTail(newValue)
  
  def Dequeue(self):
    return self.ll.deleteHead()

  def Peek(self):
    return self.ll.getTail()
  
  def GetValues(self):
    return self.ll.getValues()
  
  def GetCount(self):
    return self.ll.get_count()
