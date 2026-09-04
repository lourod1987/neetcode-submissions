/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {ListNode}
     */
    reverseList(head: ListNode | null): ListNode {
        if (head !== null) {
            let cur = head;
            let curArr = [];
            while (cur != null) {
                curArr.push(cur);
                cur = cur.next;
            }
            for (let i = 0; i < curArr.length; i++) {
                if (i === 0) {
                    curArr[i].next = null;
                } else {
                    curArr[i].next = curArr[i - 1];
                }
            }
            return curArr.pop();
        }
        return head;
    }
}
