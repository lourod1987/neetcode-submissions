class MinStack {
    constructor() {}

    /**
     * @param {number} val
     * @return {void}
     */
    arr: number[] = [];
    minStack: number[] = [];
    push(val: number): void {
        this.arr.push(val);
        if (val <= this.minStack[this.minStack.length -1] || this.minStack.length === 0) {
            this.minStack.push(val);
        }
    }

    /**
     * @return {void}
     */
    pop(): void {
        if (this.arr[this.arr.length - 1] === this.minStack[this.minStack.length - 1]) {
            this.minStack.pop();
            this.arr.pop();
        } else {
            this.arr.pop();
        }
    }

    /**
     * @return {number}
     */
    top(): number {
        return this.arr[this.arr.length - 1];
    }

    /**
     * @return {number}
     */
    getMin(): number {
        return this.minStack[this.minStack.length - 1];
    }
}
