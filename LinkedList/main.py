import SLL
import stack
import queue

l = SLL.ItemList()
print("LinkedList")
l.insertInOrder(0)
print(l.getValues())
print("Delete Head: ", l.deleteHead())
print(l.get_count(), l.getValues())
l.insertInOrder(20)
print("Delete tail: ", l.deleteTail())
print(l.get_count(), l.getValues())
print("Add 2,1,3,9")
l.insertInOrder(2)
l.insertInOrder(1)
l.insertInOrder(3)
l.insertInOrder(9)
print(l.get_count(), l.getValues())
print()

print("Stack Demo")
s = stack.Stack()
print(s.GetValues())
s.Push(10)
print(s.GetValues())
s.Pop()
print(s.GetValues())
s.Push(2)
print(s.GetValues())
s.Push(1)
print(s.GetValues())
s.Push(3)
print(s.GetValues())
s.Push(9)
print(s.GetValues())
s.Pop()
print(s.GetValues())
s.Pop()
print(s.GetValues())
s.Pop()
print(s.GetValues())
s.Pop()
print(s.GetValues())

print()
print("Queue Demo")
q = queue.Queue()
print(q.GetValues())
q.Enqueue(10)
print(q.GetValues())
q.Dequeue()
print(q.GetValues())
q.Enqueue(2)
print(q.GetValues())
q.Enqueue(1)
print(q.GetValues())
q.Enqueue(3)
print(q.GetValues())
q.Enqueue(9)
print(q.GetValues())
q.Dequeue()
print(q.GetValues())
q.Dequeue()
print(q.GetValues())
q.Dequeue()
print(q.GetValues())
q.Dequeue()
print(q.GetValues())

