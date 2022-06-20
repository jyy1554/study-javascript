//array를 사용할 경우 shift -> pop / push -> unshift를 사용하여
//구현할 수 있으나 어느쪽이든 한번은 re-indexing을 해야된다!
//그래서 우리는 singly linked list로 구현할 예정!

function Node(value) {
  this.value = value;
  this.next = null;
}

function Queue() {
  this.first = null;
  this.last = null;
  this.size = 0;

  this.enqueue = function (val) {
    const newNode = new Node(val);

    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }

    return ++this.size;
  };

  this.dequeue = function () {
    if (!this.first) {
      return null;
    }

    const removedValue = this.first.value;

    if (this.first === this.last) {
      this.last = null;
    }

    this.first = this.first.next;
    this.size--;

    return removedValue;
  };
}
