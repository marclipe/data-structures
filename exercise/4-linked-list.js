//Defining the structure of node
class Node {
  constructor(data) {
    this.data = data; 
    this.next = null; 
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(data) {
    const newNode = new Node(data); 
    newNode.next = this.head; 
    this.head = newNode;
  }

  //Method to show the element's list
  displayList() {
    let current = this.head;
    while (current !== null) {
      console.log(current.data);
      current = current.next;
    }
  }
}

const linkedList = new LinkedList()
linkedList.insertFirst("Hello");
linkedList.insertFirst(12); 
linkedList.insertFirst(20); 

linkedList.displayList();