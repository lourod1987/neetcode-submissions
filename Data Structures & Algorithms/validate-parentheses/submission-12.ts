class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s: string): boolean {
        // console.log(s);
        const stack: string[] = [];
        let increment: number = -1;
        for (let i = 0; i < s.length; i++) {
            if (s[i] === '(' || s[i] === '{' || s[i] === '[') {
                stack.push(s[i]);
                increment++;
                // console.log(increment);
            }

            if (s[i] === ')' || s[i] === '}' || s[i] === ']') {
                // console.log(increment);
                if ((s[i] === ')' && stack[increment] === '(') || (s[i] === '}' && stack[increment] === '{') || (s[i] === ']' && stack[increment] === '[')) {
                    stack.pop();
                    increment--;
                    console.log(increment);
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
