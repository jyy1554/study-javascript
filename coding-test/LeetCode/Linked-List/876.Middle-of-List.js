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
var middleNode = function (head) {
  //fastPointer, slowPointer
  //fast가 2칸 이동 시 slow가 한 칸 이동 => Time Complexity : O(n)
  // 1 -> 2 -> 3 -> 4 -> 5
  // f
  // s
  //      s    f
  //           s         f
  // 1 -> 2 -> 3 -> 4 -> 5 -> 6
  //           s         f

  let fastPointer = head;
  let slowPointer = head;

  // 괄호 안에 fastPointer가 있는 이유는 fastPointer.next가 null.next인 경우 에러 발생하므로
  while (fastPointer && fastPointer.next) {
    fastPointer = fastPointer.next.next;
    slowPointer = slowPointer.next;
  }

  return slowPointer;
};
