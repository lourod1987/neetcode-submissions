class ListNode {
    constructor(val = '', prev = null, next = null) {
        this.url = val;
        this.prev = prev;
        this.next = next;
    }
}

class BrowserHistory {
    /**
     * @constructor
     * @param {string} homepage
     */
    constructor(homepage) {
        this.homepage = new ListNode(homepage);
        this.cur = this.homepage;
    }

    /**
     * @param {string} url
     * @return {void}
     */
    visit(url) {
        const node = new ListNode(url);
        let prev = this.cur;
        prev.next = node;
        node.next = null;
        node.prev = prev;
        this.cur = node;
    }

    /**
     * @param {number} steps
     * @return {string}
     */
    back(steps) {
        while(steps > 0 && this.cur.prev) {
            this.cur = this.cur.prev;
            steps--;
        }
        return this.cur.url;
    }

    /**
     * @param {number} steps
     * @return {string}
     */
    forward(steps) {
        while (steps > 0 && this.cur.next) {
            this.cur = this.cur.next;
            steps--;
        }
        return this.cur.url;
    }
}

/**
 * Your BrowserHistory object will be instantiated and called as such:
 * var obj = new BrowserHistory(homepage)
 * obj.visit(url)
 * var param_2 = obj.back(steps)
 * var param_3 = obj.forward(steps)
 */
