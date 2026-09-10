class ListNode {
    constructor(val = 0, next = null, prev = null) {
        this.val = val;
        this.prev = next;
        this.next = prev;
    }
}

class MyLinkedList {
  constructor() {
    this.head = new ListNode(0);
    this.tail = new ListNode(0);
    this.head.next = this.tail;
    this.tail.prev = this.head;
  }

  /**
   * @param {number} index
   * @return {number}
   */
  get(index) {
    let cur = this.head.next;
    while (cur && index > 0) {
      cur = cur.next;
      index--;
    }
    if (cur && cur != this.tail && index === 0) {
        return cur.val;
    }
    return -1;
  }

  /**
   * @param {number} val
   * @return {void}
   */
  addAtHead(val) {
    const node = new ListNode(val);
    const next = this.head.next;
    const prev = this.head;
    prev.next = node;
    next.prev = node;
    node.next = next;
    node.prev = prev;
  }

  /**
   * @param {number} val
   * @return {void}
   */
  addAtTail(val) {
    const node = new ListNode(val);
    const next = this.tail;
    const prev = this.tail.prev;
    prev.next = node;
    next.prev = node;
    node.next = next;
    node.prev = prev;
  }

  /**
   * @param {number} index
   * @param {number} val
   * @return {void}
   */
  addAtIndex(index, val) {
    let cur = this.head.next;
    while (cur && index > 0) {
      cur = cur.next;
      index--;
    }
    if (cur && index === 0) {
        const node = new ListNode(val);
        const next = cur;
        const prev = cur.prev;
        prev.next = node;
        next.prev = node;
        node.next = next;
        node.prev = prev;
    }
  }

  /**
   * @param {number} index
   * @return {void}
   */
  deleteAtIndex(index) {
    let cur = this.head.next;
    while (cur && index > 0) {
        cur = cur.next;
        index--;
    }
    if (cur && cur !== this.tail && index === 0) {
        const next = cur.next;
        const prev = cur.prev;
        prev.next = next;
        next.prev = prev;
    }
  }
};
