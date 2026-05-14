class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class SingleLinkList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  append(element) {
    const node = new Node(element);
    if (!this.head) {
      this.head = node;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
    this.size++;
  }

  prepend(element) {
    const node = new Node(element);
    node.next = this.head;
    this.head = node;
    this.size++;
  }

  insertAt(element, index) {
    if (index < 0 || index > this.size) return false;
    if (index === 0) {
      this.prepend(element);
      return true;
    }
    const node = new Node(element);
    let current = this.head;
    let previous = null;
    let count = 0;
    while (count < index) {
      previous = current;
      current = current.next;
      count++;
    }
    node.next = current;
    previous.next = node;
    this.size++;
  }

  removeAt(index) {
    if (index < 0 || index >= this.size) return null;
    let removedData;
    if (index === 0) {
      removedData = this.head.data;
      this.head = this.head.next;
    } else {
      let current = this.head;
      let previous = null;
      let count = 0;
      while (count < index) {
        previous = current;
        current = current.next;
        count++;
      }
      removedData = current.data;
      previous.next = current.next;
    }
    this.size--;
    return removedData;
  }

  isEmpty() {
    return this.size === 0;
  }

  getSize() {
    return this.size;
  }

  printList() {
    let current = this.head;
    let result = "";
    while (current) {
      result += current.data + " -> ";
      current = current.next;
    }
    return (result += " null ");
  }
}

const list = new SingleLinkList();
list.append(10);
list.append(20);
list.append(30);
console.log(list.printList());
list.prepend(40);
console.log(list.printList());
list.insertAt(50, 2);
console.log(list.printList());
list.removeAt(3);
console.log(list.printList());
