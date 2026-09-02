class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s: string): boolean {
        const stack: string[] = [];
        // let increment: number = -1;
        for (let i = 0; i < s.length; i++) {
            if (s[i] === '(' || s[i] === '{' || s[i] === '[') {
                stack.push(s[i]);
                // increment++;
            }

            if (s[i] === ')' || s[i] === '}' || s[i] === ']') {
                if ((s[i] === ')' && stack[stack.length-1] === '(') || (s[i] === '}' && stack[stack.length-1] === '{') || (s[i] === ']' && stack[stack.length-1] === '[')) {
                    stack.pop();
                    // increment--;
                } else {
                    return false;
                }
            }
        }
        if (stack.length > 0) {
            return false;
        }
        return true;
    }
}
