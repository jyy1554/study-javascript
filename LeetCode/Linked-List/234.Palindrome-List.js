/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */

//여기서부터 내 코드 시작
const reverse = (head) => {
  let cur = head;
  let prev = null;
  let next = null;

  while (cur) {
    next = cur.next;
    cur.next = prev;
    prev = cur;
    cur = next;
  }

  return prev;
};

var isPalindrome = function (head) {
  //val이 0일 수 있음
  //뒤집어도 똑같은지

  //fastPointer 2칸 이동 시 slowPointer 1칸 이동
  //fastPointer가 끝에 도달하면 slowPointer는 중간에 위치

  let fast = head;
  let slow = head;

  while (fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;
  }

  let mid = reverse(slow);

  while (mid) {
    if (head.val !== mid.val) {
      return false;
    }

    mid = mid.next;
    head = head.next;
  }

  return true;
};
