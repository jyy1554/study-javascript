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
        return current;
    }
    shift() {
        if (!this.head) return undefined;
        let currentHead = this.head;
        this.head = currentHead.next;
        this.length--;
        if (this.length === 0) {
            this.tail = null;
        }
        return currentHead;
    }
    unshift(val) {
        let newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }
    get(index) {
        if (index < 0 || index >= this.length) return null;
        let counter = 0;
        let current = this.head;
        while (counter !== index) {
            current = current.next;
            counter++;
        }
        return current;
    }
    //Changing the value of a node base on its position in the Linked List
    set(index, val) {
        let targetNode = this.get(index);
        if (targetNode) {
            targetNode.val = val;
            return true;
        }
        return false;
    }
    //Adding a node to the Linked List at a specific position
    insert(index, val) {
        if (index < 0 || index > this.length) return false;
        if (index === this.length) return !!this.push(val); //boolean값 return위해 !!붙여줌
        if (index === 0) return !!this.unshift(val);

        let newNode = new Node(val);
        let preNode = this.get(index - 1);
        let temp = preNode.next;
        preNode.next = newNode;
        newNode.next = temp;
        this.length++;
        return true;
    }
}

let list = new SinglyLinkedList();
list.push("HELLO");
list.push("GOODBYE");
