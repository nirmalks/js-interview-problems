class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  // Add at the end of the list
  addAtEnd(data) {
    let newNode = new Node(data);
    let node = this.head;
    if (node == null) {
      this.head = newNode;
      return;
    }

    while (node.next !== null) {
      node = node.next;
    }
    node.next = newNode;
  }

  // Add at the beginning of the list
  addAtBeginning(data) {
    let newNode = new Node(data);
    newNode.next = this.head;
    this.head = newNode;
  }

  // Add at a specific position (0-based)
  addAtPosition(position, data) {
    if (position == 0) {
      this.addAtBeginning(data);
      return;
    }
    let curr = this.head;
    let prev = null;
    let newNode = new Node(data);

    let index = 0;
    while (curr != null && index < position) {
      prev = curr;
      curr = curr.next;
      index++;
    }

    if (index !== position) return false;

    newNode.next = curr.next;
    curr.next = newNode;
    return true;
  }

  // Delete first node with matching data
  delete(data) {
    let curr = this.head;
    let prev = null;
    while (curr != null && curr.data != data) {
      prev = curr;
      curr = curr.next;
    }
    if (curr == null) return false;
    if (prev == null) {
      this.head = curr.next;
    } else {
      prev.next = curr.next;
    }
  }

  // Delete node at specific index (0-based)
  deleteAtPosition(position) {
    if (position == 0) {
      this.deleteHead();
      return;
    }

    let prev = null;
    let curr = this.head;
    let index = 0;
    while (curr != null && index < position) {
      prev = curr;
      curr = curr.next;
      index++;
    }

    if (index != position) {
      return false;
    }
    if (curr == null) return false;
    prev.next = curr.next;
    return true;
  }

  // Delete head node
  deleteHead() {
    if (this.head != null) {
      this.head = this.head.next;
      return true;
    }

    return false;
  }

  // Delete last node
  deleteTail() {
    let curr = this.head;
    let prev = null;
    while (curr != null) {
      if (curr.next == null) {
        prev.next = null;
        return;
      }
      prev = curr;
      curr = curr.next;
    }
  }

  // Search for a node with given data
  search(data) {
    let curr = this.head;

    while (curr != null) {
      if (curr.data == data) {
        return true;
      }
      curr = curr.next;
    }

    return false;
  }

  // Print all elements in the list
  print() {
    let node = this.head;
    const items = [];
    while (node != null) {
      items.push(node.data);
      node = node.next;
    }
    console.log(items.join(' -> '));
  }

  // Return number of nodes in the list
  size() {
    let count = 0;
    let node = this.head;

    while (node != null) {
      node = node.next;
      count++;
    }
    return count;
  }

  // Check if the list is empty
  isEmpty() {
    return this.head == null;
  }

  // Convert list to array
  toArray() {}
}

// Usage
const ll = new LinkedList();

console.log('Adding at end:');
ll.addAtEnd(10);
ll.addAtEnd(20);
ll.addAtEnd(30);
ll.print(); // 10 -> 20 -> 30

console.log('Adding at beginning:');
ll.addAtBeginning(5);
ll.print(); // 5 -> 10 -> 20 -> 30

console.log('Adding at position:');
ll.addAtPosition(2, 15); // Between 10 and 20
ll.print(); // 5 -> 10 -> 15 -> 20 -> 30

console.log('Trying to add at out-of-bounds position:');
const success = ll.addAtPosition(10, 999);
console.log('Success?', success); // false
ll.print(); // No change

console.log('\nDelete value 15:');
ll.delete(15);
ll.print(); // 5 -> 10 -> 20 -> 30

console.log('\nDelete value 5 (head):');
ll.delete(5);
ll.print(); // 10 -> 20 -> 30

console.log('\nDelete tail node:');
ll.deleteTail();
ll.print(); // 10 -> 20

console.log('\nDelete at position 1:');
ll.deleteAtPosition(1);
ll.print(); // 10

console.log('\nDelete at position 0 (last node):');
ll.deleteAtPosition(0);
ll.print(); // (empty)

console.log('\nTry delete from empty list:');
const successDelete = ll.delete(99);
console.log('Success?', successDelete); // false

console.log('\nTry deleteTail on empty list:');
console.log('Success?', ll.deleteTail()); // false
