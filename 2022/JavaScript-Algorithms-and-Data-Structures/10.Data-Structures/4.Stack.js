function Node(value) {
  this.value = value;
  this.next = null;
}

function Stack() {
  this.first = null;
  this.last = null;
  this.size = 0;

  this.push = function (val) {
    const newNode = new Node(val);

    //뒤에 push를 하고 singly linked list에서 나중에 pop을 할 경우
    //list 전체를 훑어야 한다. (next밖에 없으므로)
    //우리는 Time Complexitiy를 O(1)으로 만들고 싶다.
    //따라서, 뒤에 넣는것보다 shift처럼 앞에 넣는게 낫다!!!!
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      newNode.next = this.first;
      this.first = newNode;
    }

    return ++this.size;
  };

  this.pop = function () {
    if (!this.first) {
      return null;
    }

    const poppedNodeValue = this.first.value;

    if (this.first === this.last) {
      this.last = null;
    }

    this.first = this.first.next;
    this.size--;

    return poppedNodeValue;
  };
}
