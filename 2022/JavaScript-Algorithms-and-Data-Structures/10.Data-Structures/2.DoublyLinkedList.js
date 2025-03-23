// Node : val, next, prev
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

// DoublyLinkedList : head, tail, length
class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    const newNode = new Node(val);

    if (this.length === 0) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }

    this.length++;
    return this;
  }

  pop() {
    if (!this.head) {
      return undefined;
    }

    const poppedNode = this.tail;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = poppedNode.prev;
      this.tail.next = null;
      poppedNode.prev = null; //뒤늦게 추가
    }

    this.length--;
    return poppedNode;
  }

  shift() {
    if (this.length === 0) {
      return undefined;
    }

    const oldHead = this.head;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = oldHead.next;
      this.head.prev = null;
      oldHead.next = null;
    }

    this.length--;
    return oldHead;
  }

  unshift(val) {
    const newHead = new Node(val);

    if (this.length === 0) {
      this.head = newHead;
      this.tail = this.head;
    } else {
      this.head.prev = newHead;
      newHead.next = this.head; //헷갈림
      this.head = newHead;
    }

    this.length++;
    return this;
  }

  get(index) {
    if (index < 0 || index >= this.length) {
      return null;
    }

    let currentNode = this.head;
    let count = 0;

    if (index <= this.length / 2) {
      while (index !== count) {
        currentNode = currentNode.next;
        count++;
      }
    } else {
      currentNode = this.tail;
      count = this.length - 1;

      while (index !== count) {
        currentNode = currentNode.prev;
        count--;
      }
    }

    return currentNode;
  }

  //replacing the value of a node
  set(index, val) {
    const foundNode = this.get(index);

    if (foundNode !== null) {
      foundNode.val = val;
      return true;
    }

    return false;
  }

  insert(index, val) {
    if (index < 0 || index > this.length) {
      return false;
    }

    if (index === 0) {
      return !!this.unshift(val); //boolean으로 반환
    }

    if (index === this.length) {
      return !!this.push(val);
    }

    const insertedNode = new Node(val);
    const beforeNode = this.get(index - 1); //신박
    const afterNode = this.get(index);

    insertedNode.prev = beforeNode;
    beforeNode.next = insertedNode;
    insertedNode.next = afterNode;
    afterNode.prev = insertedNode;
    this.length++; //계속 까먹음

    return true;
  }

  remove(index) {
    if (index < 0 || index >= this.length) {
      return undefined;
    }

    if (index === 0) {
      return this.shift();
    }

    if (index === this.length - 1) {
      return this.pop();
    }

    const removedNode = this.get(index);
    const beforeNode = removedNode.prev;
    const afterNode = removedNode.next;

    beforeNode.next = afterNode;
    afterNode.prev = beforeNode;
    removedNode.prev = null;
    removedNode.next = null;
    this.length--; //shift, pop에서는 알아서 length - 1 해주므로 신경쓰지 않아도됨. 요거 놓치기 쉬운듯 ㅜㅜ

    return removedNode;
  }
}
