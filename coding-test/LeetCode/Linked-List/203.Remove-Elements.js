/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
  //val과 같은 노드들을 지우기
  //val은 0 부터 50
  //Node.val은 1부터 50
  let pre = new ListNode();
  const dummy = pre;

  if (val === 0 || head === null) {
    return head;
  }

  while (head) {
    if (head.val === val) {
      head = head.next;
    } else {
      pre.next = head;
      head = head.next;
      pre = pre.next;
    }
  }

  pre.next = null;

  return dummy.next;
};
