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

// https://youtu.be/p10f-VpO4nE
var deleteDuplicates = function (head) {
  let cur = head;

  // 1 -> 1 -> 2 -> 3 -> 3
  //cur  cur.next
  // 1 -> 1 -> 2 -> 3 -> 3
  //cur       cur.next
  // 1 -> 1 -> 2 -> 3 -> 3
  //          cur
  // 1 -> 1 -> 2 -> 3 -> 3
  //          cur  cur.next
  // 1 -> 1 -> 2 -> 3 -> 3
  //               cur
  // 1 -> 1 -> 2 -> 3 -> 3 -> null
  //               cur       cur.next
  // 1 -> 1 -> 2 -> 3 -> 3 -> null
  //                          cur

  while (cur) {
    /* 이건 나의 풀이
      if (cur.next && cur.next.val === cur.val) {
          cur.next = cur.next.next;
      } else {
          cur = cur.next;
      }
      */

    // 유튭 풀이
    while (cur.next && cur.next.val === cur.val) {
      cur.next = cur.next.next;
    }

    cur = cur.next;
  }

  return head;
};
