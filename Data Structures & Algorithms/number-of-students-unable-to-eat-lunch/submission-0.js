class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

class Solution {
    /**
     * @param {number[]} students
     * @param {number[]} sandwiches
     * @return {number}
     */
    countStudents(students, sandwiches) {
        let tail = null;
        let head = null;
        let remaining = students.length;
        let sandwichHead = 0;
        let loopOver = 0;
        for (let i = students.length - 1; i >= 0; i--) {
            let node = new ListNode(students[i], head)
            if (i === students.length - 1) {
                tail = node;
                head = node;
            } else {
                head = node;
            }
        }

        while (sandwichHead < sandwiches.length && head) {
            if (sandwiches[sandwichHead] === head.val) {
                let next = head.next;
                head.next = null;
                head = next;
                sandwichHead++;
                remaining--;
                loopOver = 0;
            } else {
                let prev = tail;
                let next = head.next;
                head.next = null;
                prev.next = head;
                tail = prev.next;
                head = next;
                loopOver++;
                if (loopOver === remaining) {
                    break;
                }
            }
        }
        return remaining;
    }
}
