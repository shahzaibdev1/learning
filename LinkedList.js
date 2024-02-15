class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class List {
  constructor(head = null) {
    this.head = new Node(head);
  }

  append(value) {
    let newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      return this;
    }

    let current = this.head;

    while (current.next) {
      current = current.next;
    }

    current.next = newNode;
    return this;
  }

  prepend(value) {
    this.head = new Node(value, this.head);
    return this;
  }

  insertAt(index, value) {
    let count = 0;

    if (index === 0) {
      this.head = new Node(value, this.head);
      return this;
    }

    let current = this.head;

    while (count < index) {
      current = current.next;
      count++;

      if (index > count) {
        throw new RangeError("Inserting at index out of bounds");
      }
    }

    current.next = new Node(value, current.next);
    return this;
  }

  pop() {
    if (!this.head) {
      return;
    }

    let current = this.head;
    let prev = null;

    while (current.next) {
      prev = current;
      current = current.next;
    }

    if (prev?.next) {
      prev.next = null;
    }

    return this;
  }

  deleteAt(index) {
    if (index === 0) {
      this.head = this.head.next;
      return this;
    }

    let count = 0;
    let current = this.head;
    let prev = null;

    while (count < index) {
      prev = current;
      current = current.next;
      count++;

      if (index > count) {
        throw new RangeError("Deleting at index out of bounds");
      }
    }

    prev.next = current.next;
    return this;
  }

  getValue() {
    let current = this.head;
    let res = [];

    while (current) {
      res.push(current.value);
      current = current.next;
    }

    return res;
  }

  sort() {
    let current = this.head;
    let prev = null;

    while (current) {
      prev = current;
      current = current.next;

      if (prev && current && prev.value > current.value) {
        let currentData = current.value;
        let prevData = prev.value;
        prev.value = currentData;
        current.value = prevData;
      }
    }
  }
}

let newList = new List(2);
newList.append(4);
newList.append(3);
newList.insertAt(0, 1);
newList.append(8);
newList.append(7);
newList.prepend(7);
newList.insertAt(1, 1);
// newList.deleteAt(0);
newList.sort();
console.log(newList.getValue());
