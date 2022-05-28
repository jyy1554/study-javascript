// piece of data - val
// reference to next node - next

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

// var first = new Node("Hi");
// first.next = new Node("there");
// first.next.next = new Node("how");
// first.next.next.next = new Node("are");
// first.next.next.next.next = new Node("you");

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val) {
        let newNode = new Node(val);
        //when empty
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode; //이전 tail의 next를 연결해주기 위해
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
    pop() {
        //when empty
        if (!this.head) return undefined;
        let current = this.head;
        let newTail = current;
        while (current.next) {
            newTail = current;
            current = current.next;
        }
        this.tail = newTail;
        this.tail.next = null; //nothing comes after new tail
        this.length--;
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return current.val;
    }
}

let list = new SinglyLinkedList();
list.push("HELLO");
list.push("GOODBYE");
