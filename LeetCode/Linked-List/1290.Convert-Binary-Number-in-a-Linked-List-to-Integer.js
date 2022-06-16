/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */

var getDecimalValue = function (head) {
  let result = head.val;
  head = head.next;

  while (head) {
    result = result * 2 + head.val;
    head = head.next;
  }

  return result;
};

// 101
// 1
// (1) * 2 + 0
// (1*2 + 0) * 2 + 1
