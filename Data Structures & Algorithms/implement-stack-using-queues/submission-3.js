class MyStack {
    constructor() {
        // this.standardQueue = new Queue();
        this.reverseQueue = new Queue();
    }

    /**
     * @param {number} x
     * @return {void}
     */
    push(x) {
        this.reverseQueue.push(x);
        let length = this.reverseQueue.size();
        while (length > 1) {
            this.reverseQueue.push(this.reverseQueue.pop());
            length --;
        }
    }

    /**
     * @return {number}
     */
    pop() {
        return this.reverseQueue.pop();
    }

    /**
     * @return {number}
     */
    top() {
        return this.reverseQueue.front();
    }

    /**
     * @return {boolean}
     */
    empty() {
        if (this.reverseQueue.isEmpty()) {
            return true;
        }
        return false;
    }
}

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
