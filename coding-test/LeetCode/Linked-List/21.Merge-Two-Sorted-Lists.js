/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
  // https://www.youtube.com/watch?v=eQGn1xbt1JU
  let curNode = new ListNode();
  const dummy = curNode;

  while (list1 && list2) {
    if (list1.val <= list2.val) {
      curNode.next = list1;
      list1 = list1.next;
    } else {
      curNode.next = list2;
      list2 = list2.next;
    }

    curNode = curNode.next;
  }

  if (list1) curNode.next = list1;
  if (list2) curNode.next = list2;

  console.log(JSON.stringify(dummy));

  return dummy.next;
};
