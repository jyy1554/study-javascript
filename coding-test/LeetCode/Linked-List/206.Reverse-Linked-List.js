/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  let cur = head;
  let prev = null;
  let next = null;

  while (cur) {
    next = cur.next;
    cur.next = prev;
    prev = cur;
    cur = next;
  }

  //prev의 위치는 맨 끝 연결의 시작점이다.
  // prev는 [5,4,3,2,1]이기 때문에 prev을 반환하면 된다. (연결리스트는 연결된 순으로 해당 노드와 연결된 모든 노드를 반환한다)
  return prev;
};
