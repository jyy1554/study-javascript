/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
  // headA :      4 -> 1
  //             p1      -> 8 -> 4 -> 5
  // headB : 5 -> 6 -> 1
  //        p2
  // p1과 p2는 동시에 한칸씩 이동 -> p1이 null을 만나는 경우, p1 = headB
  //                           p2가 null인 경우, p2 = headA;
  // p1은 (headA 길이 + headB 길이)만큼 이동
  // p2도 (headB 길이 + headA 길이)만큼 이동
  // 각자 모두 같은 길이 만큼 이동하고 결국 두 포인터가 같은 곳에서 이동
  // p1과 p2가 동시에 null인 경우는 intersection이 없으므로 return null

  let pointer1 = headA;
  let pointer2 = headB;

  while (pointer1 !== pointer2) {
    //아래 코드 순서 매우 중요, 바뀌는 순간 틀림!!!
    pointer1 = pointer1.next;
    pointer2 = pointer2.next;

    if (pointer1 === null && pointer2 === null) {
      return null;
    }

    if (pointer1 === null) {
      pointer1 = headB;
    }

    if (pointer2 === null) {
      pointer2 = headA;
    }
  }

  return pointer1;
};
